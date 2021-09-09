// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const nameEl = document.querySelector('#username')
const successId = document.querySelector('.success-message')
const failureId = document.querySelector('.failure-message')
const firstPassword = document.querySelector('#password')
const secondPassword = document.querySelector('#password-retype')
const mismatchPassword = document.querySelector('.mismatch-message')
const submit = document.querySelector('button')

let nameCount = 0;
let pwCount = 0;
submit.disabled = true

function isMoreThan4Length(value) { //nameEl의 value 길이를 판단한다.
  if (value.length >= 4) { //길이가 4이상이면
    successId.classList.remove('hide') //sucessID에 'hide'라는 클래스를 삭제
    failureId.classList.add('hide') //failureID에 'hide'라는 클래스 추가
    nameCount = 1;
    if (nameCount === 1 && pwCount === 1)
      submit.disabled = false
  } else {
    successId.classList.add('hide') //길이가 4이하이면
    failureId.classList.remove('hide')
    nameCount = 0;
    if (nameCount === 0 || pwCount === 0)
      submit.disabled = true
  }
}
nameEl.onkeyup = function () { //nameEl에 키눌림을 확인한다
  isMoreThan4Length(nameEl.value) //nameEl의 value를 인수로 보낸다.
}

function isMatch(password1, password2) { //첫번째 패스워드와 두번째 패스워드를 인수로 받는다.
  if (password1 === password2 || password2 === '' || password1 === '') { //두 패스워드가 일치하면 또는 둘중 하나라도 값이 안들어간 상태이면
    return true //true를 반환
  } else return false //일치하지 않으면 false를 반환
}

firstPassword.onkeyup = function () { //첫번째 패스워드 입력을 확인한다.

  if (isMatch(firstPassword.value, secondPassword.value)) { //두 패스워드가 일치할시
    mismatchPassword.classList.add('hide') //패스워드가 틀렸다는 엘리먼트에 'hide' 클래스를 추가
    if (firstPassword.value && secondPassword.value) {
      pwCount = 1;
      if (pwCount === 1 && nameCount === 1) {
        submit.disabled = false
      }
    }
  } else {
    mismatchPassword.classList.remove('hide') // 두 패스워드가 불일치 할 시 패스워드가 틀렸다는 엘리먼트에 'hide'를 추가
    pwCount = 0;
    if (pwCount === 0 || nameCount === 0) {
      submit.disabled = true
    }
  }
}

secondPassword.onkeyup = function () { //두번째 패스워드 입력도 확인한다.
  if (isMatch(firstPassword.value, secondPassword.value)) {
    mismatchPassword.classList.add('hide')
    if (firstPassword.value && secondPassword.value) {
      pwCount = 1;
      if (pwCount === 1 && nameCount === 1) {
        submit.disabled = false
      }
    }
  } else {
    mismatchPassword.classList.remove('hide')
    pwCount = 0;
    if (pwCount === 0 || nameCount === 0) {
      submit.disabled = true
    }
  }
}