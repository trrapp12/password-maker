(() => {
  // grab the necessary DOM elements
  const passwordButton = document.getElementById('button');
  const outPut1 = document.getElementById('option-1');
  const outPut2 = document.getElementById('option-2');
  const outPut3 = document.getElementById('option-3');
  const outPut4 = document.getElementById('option-4');
  // const textInput = document.getElementById('text');
  const rangeSlider = document.getElementById('text');
  const sliderValue = document.getElementById('sliderValue');

  console.log('outPut1 is', outPut1);
  console.log(
    'rangeSlider is',
    rangeSlider,
    'rangeSlider.value is',
    rangeSlider.value,
    'typeof rangeSlider.value is',
    typeof rangeSlider.value
  );
  // create variables

  let passwordArray1 = [];
  let passwordArray2 = [];
  let passwordArray3 = [];
  let passwordArray4 = [];

  let characterArray =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+=-~'.split(
      ''
    );

  // create functions

  function initializeSlider() {
    console.log('initializeSlider called');
    const value = rangeSlider.value || '';
    // since the left position of the thumb changes according to percentage, we can use the percentage to decide where the slider will be
    const min = parseInt(rangeSlider.min, 10);
    const max = parseInt(rangeSlider.max, 10);
    const percentage = ((value - min) / (value - max)) * 100;

    sliderValue.innerText = value;

    // calculate left position
    let originalBoundaries = rangeSlider.getBoundingClientRect();
    let originalWidth = originalBoundaries.width;
    let originalLeft = originalBoundaries.left;

    let numAfterPerc = value / 50;
    sliderValue.style.left = `calc(${
      originalLeft + originalWidth * numAfterPerc
    }px + ${numAfterPerc * 0.5}rem)`; // Adjust formula as needed
    sliderValue.style.top = `${originalBoundaries.top - 50}px`;
  }

  function generateRandomString() {
    console.log('generateRandomString called');
    let num = getNumber();
    validateNumber(num);
    var x = checkWhichSlotsAreEmpty();
    for (let i = 0; i < num; i++) {
      var y = generateRandomNumber();
      updateArray(x, y);
    }
    console.log('x going into displayArray is', x);
    displayArray(x);
  }

  function getNumber() {
    console.log('getNumber called');
    let newNumber = document.getElementById('text').value;
    console.log('newNumber is', newNumber);
    return newNumber === '' ? 8 : parseInt(newNumber, 10);
  }

  function validateNumber(newNumber) {
    console.log('validateNumber called: newNumber is', newNumber);
    if (!newNumber) {
      alert('please enter a non-zero number');
    } else if (Math.sign(newNumber) !== 1) {
      alert('please enter a positive number');
    } else {
      return newNumber;
    }
  }

  function updateArray(chosenarray, value) {
    console.log(
      'updateArray called.  chosenarray input parameter is',
      chosenarray,
      'value is',
      value
    );
    chosenarray.push(characterArray[value]);
    console.log('chosenarray was updated to', chosenarray);
  }

  function generateRandomNumber() {
    console.log('generateRandomNumber called');
    return Math.floor(Math.random() * characterArray.length);
  }

  function checkWhichSlotsAreEmpty() {
    console.log('checkWhichSlotsAreEmpty called');
    if (passwordArray1.length === 0) {
      return passwordArray1;
    } else if (passwordArray2.length === 0) {
      return passwordArray2;
    } else if (passwordArray3.length === 0) {
      return passwordArray3;
    } else if (passwordArray4.length === 0) {
      passwordButton.innerText = 'Reset';
      return passwordArray4;
    } else {
      reset();
    }
  }

  function findTarget(evt) {
    console.log('findTarget fired');
    let targetElement;
    if (evt.target.className === 'option') {
      targetId = evt.target.id;
      targetElement = document.getElementById(targetId);
      if (evt.target.innerHTML) {
        navigator.clipboard.writeText(evt.target.value);
        alert('Password successfully copied!');
      } else {
        alert('no password to copy');
      }
    }
  }

  function turnTextWhite(element) {
    element.style.color = 'white';
  }
  function turnTextBlack(...elements) {
    elements.forEach((el) => {
      el.style.color = '#ffffff40';
    });
  }

  function displayArray(outPutArray) {
    console.log('displayArray called');
    let outPutRegex = outPutArray.toString().replace(/,/g, '');
    console.log('outPutRegex is', outPutRegex);
    if (outPut1.innerText === '' || outPut1.innerText === 'password option 1') {
      console.log('outPut1 is empty');
      outPut1.innerText = outPutRegex;
      turnTextWhite(outPut1);
    } else if (
      outPut2.innerText === '' ||
      outPut2.innerText === 'password option 2'
    ) {
      console.log('outPut2 is empty');
      outPut2.innerText = outPutRegex;
      turnTextWhite(outPut2);
    } else if (
      outPut3.innerText === '' ||
      outPut3.innerText === 'password option 3'
    ) {
      console.log(' outPut3 is empty');
      outPut3.innerText = outPutRegex;
      turnTextWhite(outPut3);
    } else if (
      outPut4.innerText === '' ||
      outPut4.innerText === 'password option 4'
    ) {
      console.log('outPut4 is empty');
      outPut4.innerText = outPutRegex;
      turnTextWhite(outPut4);
    }
  }

  function reset() {
    console.log('reset called');
    passwordArray1 = [];
    passwordArray2 = [];
    passwordArray3 = [];
    passwordArray4 = [];
    outPut1.innerText = 'password option 1';
    outPut2.innerText = 'password option 2';
    outPut3.innerText = 'password option 3';
    outPut4.innerText = 'password option 4';
    turnTextBlack(outPut1, outPut2, outPut3, outPut4);
    rangeSlider.value = '';
    passwordButton.innerText = 'Generate Password';
  }

  // add listeners
  passwordButton.addEventListener('click', generateRandomString);

  // adjustments to turn text field into range finder
  document.addEventListener('click', findTarget);
  document.addEventListener('DOMContentLoaded', initializeSlider);
  window.addEventListener('resize', initializeSlider);
  rangeSlider.addEventListener('input', initializeSlider);
})();
