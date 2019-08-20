'use strict';
window.onload = () => {

  document.querySelectorAll('.alcohol-list').forEach(el => {
    el.onclick = function (e) {
      // el.toggleAttribute('data-is-collapsed');
      console.log(e.target.textContent);
    }
  });
};