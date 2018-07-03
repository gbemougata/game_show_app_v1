//create variables

const qwerty =document.getElementById('qwerty');
const phrase= document. getElementById('phrase');
const  miss= 0;
const lives=5;

//const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
let phrases= ['moday boring','tuesday safer','wednesday blessing','thursday high', 'friday happy.'];

//addEvent listener

startGame.addEventListener('click', function() {
//  console.log(overlay.style.display='hide');
if (startGame ===1){
  overlay.style.display='none';
}else {
  overlay.style.display='block';

}
});

//phrases array


//let phrases= ['moday boring','tuesday safer','wednesday blessing','thursday high', 'friday happy.'];
function getRandomPhrasesArray(arr){
  var guessWord= arr [Math.floor * (Math.random().length.split())];
  return guessWord;
}



//create addPhraseToDisplay function

function addPhraseDisplay(arr){
  const phraseArray=getRandomPhraseAsArray(phrases);
    const caracterArr=arr[i];
    //create list item
    let list =document.createElement('li');
    const text=document.createTexteNode('caracterArray');
    list.appendChild(text);
    phrases.appendChild(li);
    //cons phraseUl=document.getElementsById('#phrase ul')[0];
    //li.textContent=arr[i];
    //phraseUl.appendChild(li);

      for ( i=0; i< arr.length; i++){
        //const caracterArr=arr[i];
    if(caracterArr===''){
      phrase.className='space';
    }else {
      phrases.className='letter';
    }
  };
}

 //addPhraseToDisplay(phraseArray);
//create a check letter function
function checkLetter(letter){
for (let i=0 ; i<li.length ; i++){
  if (checkLetter===guessLetter){
    li[i].classList.add('show');
  }
else{
  li[i].classList.add('null');
}
}
}
