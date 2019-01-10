'use strict';

const question = document.querySelector('.question');
const buttons = document.querySelectorAll('button');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');

const xhr = new XMLHttpRequest();
xhr.open("GET", "/allquestions");
xhr.onload = () => {
  if (xhr.status == "200") {
    const res = JSON.parse(xhr.responseText);
    // console.log(res);
  } 
}
xhr.send();

let getnewquestion = () => {
  const newxhr = new XMLHttpRequest();
  newxhr.open("GET", "/showquestion");
  newxhr.onload = () => {
    if (newxhr.status == "200") {
      const res = JSON.parse(newxhr.responseText);
      console.log(res[0].is_correct);
      question.innerHTML = res[0].question;
      answer1.innerHTML = res[0].answer;
      answer1.setAttribute('iscorrect', res[0].is_correct);
      answer2.innerHTML = res[1].answer;
      answer2.setAttribute('iscorrect', res[1].is_correct);
      answer3.innerHTML = res[2].answer;
      answer3.setAttribute('iscorrect', res[2].is_correct);
      answer4.innerHTML = res[3].answer;
      answer4.setAttribute('iscorrect', res[3].is_correct);
    } 
  }
  newxhr.send();
}

getnewquestion();


buttons.forEach(element => {
  element.addEventListener('click', () => {
    if (event.target.getAttribute('iscorrect') === '1' ) {
      getnewquestion();
    } else {
      console.log('nemjo')
    }
  });
});
