function showPassword() {
  let pwd = document.querySelector('#password');
  if (pwd.type === 'password') {
    pwd.type = 'text';
  } else {
    pwd.type = 'password';
  }
}


