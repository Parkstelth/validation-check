// 동영상 강의에 나온 코드를 그대로 실습하세요
// TODO : DOM으로부터 필요한 엘리먼트를 불러오세요.
const nameEl = document.querySelector('#username')
const successId = document.querySelector('.success-message')
const failureId = document.querySelector('.failure-message')
const firstPassword = document.querySelector('#password')
const secondPassword = document.querySelector('#password-retype')
const mismatchPassword = document.querySelector('.mismatch-message')

function isMoreThan4Length(value) { //nameEl의 value 길이를 판단한다.
  if (value.length >= 4) { //길이가 4이상이면
    successId.classList.remove('hide') //sucessID에 'hide'라는 클래스를 삭제
    failureId.classList.add('hide') //failureID에 'hide'라는 클래스 추가
  } else {
    successId.classList.add('hide') //길이가 4이하이면
    failureId.classList.remove('hide')
  }
}
nameEl.onkeyup = function () { //nameEl에 키눌림을 확인한다
  isMoreThan4Length(nameEl.value) //nameEl의 value를 인수로 보낸다.
}

function isMatch(password1, password2) { //첫번째 패스워드와 두번째 패스워드를 인수로 받는다.
  if (password1 === password2 || password1==="" || password2==="") { //두 패스워드가 일치하면
    return true //true를 반환
  } else return false //일치하지 않으면 false를 반환
}
firstPassword.onkeyup = function () { //첫번째 패스워드 입력을 확인한다.
  if (isMatch(firstPassword.value, secondPassword.value)) { //두 패스워드가 일치할시
    mismatchPassword.classList.add('hide') //패스워드가 틀렸다는 엘리먼트에 'hide' 클래스를 추가
  } else mismatchPassword.classList.remove('hide') // 두 패스워드가 불일치 할 시 패스워드가 틀렸다는 엘리먼트에 'hide'를 추가
}
secondPassword.onkeyup = function () { //두번째 패스워드 입력도 확인한다.
  if (isMatch(firstPassword.value, secondPassword.value)) {
    mismatchPassword.classList.add('hide')
  } else mismatchPassword.classList.remove('hide')
}
