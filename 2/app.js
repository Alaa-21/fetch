let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#number-input');
// Functions
// function getFactAjax(){
//   var number = numberInput.value;
  

//   let xhr = new XMLHttpRequest();

//   xhr.open('GET', 'http://numbersapi.com/'+number);
//   xhr.onload = function(){
//     if(xhr.status === 200 && number != ''){
//       fact.style.display = 'block';
//       factText.innerText = this.responseText;
//     }else{
//       fact.style.display = 'none' 
//     }
//   }
//   xhr.send();
// }

function getFactFetch(){
  let number = numberInput.value;
  fetch('http://numbersapi.com/'+number)
  .then(res => res.text())
  .then(data => {
    if(number != ''){
      fact.style.display = 'block';
      factText.innerText = data;
    }else{
      fact.style.display = 'none';
    }
  })
  .catch(err => console.log(err))

}



// numberInput.addEventListener('input', getFactAjax);
numberInput.addEventListener('input', getFactFetch);