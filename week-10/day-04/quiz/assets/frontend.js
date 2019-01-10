'use strict';

const question = document.querySelector('.question');
const buttons = document.querySelectorAll('button');
const answer1 = document.querySelector('.answer1');
const answer2 = document.querySelector('.answer2');
const answer3 = document.querySelector('.answer3');
const answer4 = document.querySelector('.answer4');
const score = document.querySelector('.score');

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
  newxhr.open("GET", "/api/game");
  newxhr.onload = () => {
    if (newxhr.status == "200") {
      const res = JSON.parse(newxhr.responseText);
      buttons.forEach(element => {
        element.classList.remove('red');
        element.classList.remove('green');
        element.classList.remove('yellow');
        element.disabled = false;
      });
      question.innerHTML = res.question;
      answer1.innerHTML = res.answers[0].answer;
      answer1.setAttribute('iscorrect', res.answers[0].is_correct);
      answer2.innerHTML = res.answers[1].answer;
      answer2.setAttribute('iscorrect', res.answers[1].is_correct);
      answer3.innerHTML = res.answers[2].answer;
      answer3.setAttribute('iscorrect', res.answers[2].is_correct);
      answer4.innerHTML = res.answers[3].answer;
      answer4.setAttribute('iscorrect', res.answers[3].is_correct);
    };
  };
  newxhr.send();
};

getnewquestion();

let counter = 1;

let addToCounter = () => {
  score.innerHTML = counter++;
};

buttons.forEach(element => {
  element.addEventListener('click', () => {
    element.classList.add('yellow');
    setTimeout(getnewquestion, 3000);
    if (event.target.getAttribute('iscorrect') === '1') {
      setTimeout(() => {
        element.classList.remove('yellow');
      }, 1000);
      setTimeout(() => {
        element.classList.add('green');
      }, 1000);
      buttons.forEach(element => {
        element.disabled = true;
      });
      setTimeout(addToCounter, 3000);
    } else {
      setTimeout(() => {
        element.classList.remove('yellow');
      }, 1000);
      setTimeout(() => {
        element.classList.add('red');
      }, 1000);
      buttons.forEach(element => {
        element.disabled = true;
        if (element.getAttribute('iscorrect') === '1') {
          setTimeout(() => {
            element.classList.add('green');
          }, 1000);
        }
      });
    }
  });
});

const manageParagraph = document.querySelector('a');
manageParagraph.addEventListener('click', (event) => {
  event.preventDefault();
  window.location = '/manage';
});