window.addEventListener('load', function() {
  let loginArea = document.getElementById('login__area');
  let resetPasswordArea = document.getElementById('reset-password__area');
  let forgetPassword = document.getElementById('RecoverPassword');
  let cancelLink = document.getElementById('HideRecoverPasswordLink');
  if (forgetPassword && cancelLink) {
    forgetPassword.addEventListener('click', () => {
      resetPasswordArea.classList.toggle('hide')
      loginArea.classList.toggle('hide')
    });
    cancelLink.addEventListener('click', () => {
      resetPasswordArea.classList.toggle('hide')
      loginArea.classList.toggle('hide')
    });
  }
});