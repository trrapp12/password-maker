(() => {

  // grab the necessary DOM elements
  const passwordButton = document.getElementById('button');
  const outPut1 = document.getElementById('option-1');
  const outPut2 = document.getElementById('option-2');
  const outPut3 = document.getElementById('option-3');
  const outPut4 = document.getElementById('option-4');
  const textInput = document.getElementById('text');

  // create variables

  let passwordArray1 = [];
  let passwordArray2 = [];
  let passwordArray3 = [];
  let passwordArray4 = [];

  let characterArray = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-~'.split('');

  // create functions

  // section 1 - copy functionality

  function findTarget (evt) {
    if (evt.target.className === 'option') {
      
      targetId = evt.target.id;
      // console.log(targetId)
      targetElement = document.getElementById(targetId);
      // console.log(targetElement)
      targetElement.select();
      if (evt.target.innerHTML) {
        document.execCommand("copy")
        alert("Password successfully copied!")
      } else {
        alert('no password to copy')
      }
    }
  }

  window.addEventListener('click', findTarget)
  // section 2 - password generation
  function getNumber() {
    let newNumber = Math.floor(document.getElementById('text').value)
    if (!newNumber) {
      alert('please enter a non-zero number')
    } else if (Math.sign(newNumber) !== 1){
      alert('please enter a positive number')
    } else {
      return newNumber;
    }
     
  }

  function generateRandomNumber() {
    return (Math.floor(Math.random() * 77) + 1)
  }

  function updateArray(chosenarray, value) {
    chosenarray.push(characterArray[value])
  }

  function displayArray (outPutArray) {
    if (outPut1.innerHTML === '') {
      outPut1.innerText = outPutArray.toString().replace(/,/g, '');
    } else if (outPut2.innerHTML === '') {
      outPut2.innerText = outPutArray.toString().replace(/,/g, '');
    } else if (outPut3.innerHTML === '') {
      outPut3.innerText = outPutArray.toString().replace(/,/g, '');
    } else if (outPut4.innerHTML === '') {
      outPut4.innerText = outPutArray.toString().replace(/,/g, '');
    } 
  }

  function reset () {
    passwordArray1 = [];
    passwordArray2 = [];
    passwordArray3 = [];
    passwordArray4 = [];
    outPut1.innerText = '';
    outPut2.innerText = '';
    outPut3.innerText = '';
    outPut4.innerText = '';
    textInput.value = '';
    passwordButton.innerText = "Generate Password"
  }

  function checkWhichSlotsAreEmpty () {
    if (passwordArray1.length === 0) {
      return passwordArray1
    } else if (passwordArray2.length === 0) {
      return passwordArray2
    } else if (passwordArray3.length === 0) {
      return passwordArray3
    } else if (passwordArray4.length === 0) {
      passwordButton.innerText = "Reset";
      return passwordArray4
    } else {
      reset()
    }
  }

  function generateRandomString () {
    let num = getNumber();
    // console.log(num)
    var x = checkWhichSlotsAreEmpty();
    for (let i = 0; i < num; i++) {
      // console.log(i)
      var y = generateRandomNumber();
      updateArray(x, y);
    }
    displayArray(x);
  }

  // add listeners
  passwordButton.addEventListener('click', generateRandomString)

})()