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
      answer1.classList.remove('green');
      answer2.classList.remove('green');
      answer3.classList.remove('green');
      answer4.classList.remove('green');
      answer1.classList.remove('red');
      answer2.classList.remove('red');
      answer3.classList.remove('red');
      answer4.classList.remove('red');
      question.innerHTML = res[0].question;
      answer1.innerHTML = res[0].answer;
      answer1.setAttribute('iscorrect', res[0].is_correct);
      answer2.innerHTML = res[1].answer;
      answer2.setAttribute('iscorrect', res[1].is_correct);
      answer3.innerHTML = res[2].answer;
      answer3.setAttribute('iscorrect', res[2].is_correct);
      answer4.innerHTML = res[3].answer;
      answer4.setAttribute('iscorrect', res[3].is_correct);
      buttons.forEach(element => {
        element.disabled = false;
      });
    };
  };
  newxhr.send();
};

getnewquestion();

const score = document.querySelector('.score');
let counter = 1;

let addToCounter = () => {
  score.innerHTML = counter++;
};

buttons.forEach(element => {
  element.addEventListener('click', () => {
    setTimeout(getnewquestion, 3000);
    if (event.target.getAttribute('iscorrect') === '1') {
      event.target.classList.add('green');
      buttons.forEach(element => {
        element.disabled = true;
      });
      setTimeout(addToCounter, 2000);
    } else {
      event.target.classList.add('red');
      buttons.forEach(element => {
        element.disabled = true;
      });
    }
  });
});
