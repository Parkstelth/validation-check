// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const nameEl = document.querySelector('#username')
const successID = document.querySelector('.success-message')
const failureID = document.querySelector('.failure-message')
const firstPassword = document.querySelector('#password')
const secondPassword = document.querySelector('#password-retype')
const mismatchPassword = document.querySelector('.mismatch-message')
function isMoreThan4Length(value) {
  if(value.length >= 4){
    successID.classList.remove('hide')
    failureID.classList.add('hide')
  }
else { successID.classList.add('hide')
failureID.classList.remove('hide')
}
}
nameEl.onkeyup = function() {
  isMoreThan4Length(nameEl.value)
}
function isMatch (password1, password2) {
  if(password1 == password2)
  return;
}
firstPassword.onkeyup = function(){
  isMatch(firstPassword.value, secondPassword.value)
}
secondPassword.onkeyup = function(){
  isMatch(firstPassword.value, secondPassword.value)
}
