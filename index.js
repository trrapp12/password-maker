(() => {

  // grab the necessary DOM elements
  const passwordButton = document.getElementById('button');
  const outPut1 = document.getElementById('option-1');
  const outPut2 = document.getElementById('option-2');
  const outPut3 = document.getElementById('option-3');
  const outPut4 = document.getElementById('option-4');

  // create variables

  let passwordArray1 = [];
  let passwordArray2 = [];
  let passwordArray3 = [];
  let passwordArray4 = [];

  let characterArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9','!','@','#','$','%','^','&','*','(',')','_','+','=','-','~']
  let regexComparison = /^[a-zA-Z0-9!@#$%^&*()_\-+=~]*/g

  // create functions
  function getNumber() {
    return Math.floor(document.getElementById('text').value)
  }

  function generateRandomNumber() {
    return (Math.floor(Math.random() * 77) + 1)
  }

  function updateArray(array, value) {
    array.push(characterArray[value])
  }

  function checkWhichSlotsAreEmpty () {
    if (passwordArray1.length === 0) {
      return outPut1
    } else if (passwordArray2.length === 0) {
      return outPut2
    } else if (passwordArray3.length === 0) {
      return outPut3
    } else (passwordArray4.length === 0) {
      return outPut4
    }
  }

  function generateRandomString () {
    let num = getNumber();
    console.log(num)
    for (let i = 0; i < num; i++) {
      var x = generateRandomNumber();
      updateArray(passwordArray1, x)
    }
    console.log(passwordArray1)
  }

  // add functions as listeners
  passwordButton.addEventListener('click', generateRandomString)

})()