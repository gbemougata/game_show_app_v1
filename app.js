//create variables

const qwerty =document.getElementById('qwerty');
const phrase= document. getElementById('phrase');
const  miss= 0;
const lives=5;
const win=document.getElementsByClassName('win');
const lose=document.getElementsByClassName('lose');
//const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
let phrases= ['moday boring','tuesday safer','wednesday blessing','thursday high', 'friday happy.'];

//addEvent listener

startGame.addEventListener('click', function() {
console.log(startGame);
if (startGame ===1){
  console.log(overlay.style.display='hide');
}else {
  console.log(overlay.style.display='block');

}
});

//phrases array


//get randomphrase array and use split methode on it.
function getRandomPhrasesArray(arr){
  var guessWord= arr [ Math.floor * (Math.random().length.split(""))];
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
    //not sure if i need to use textContent on list
    phrases.appendChild(list);




      for ( i=0; i< arr.length; i++){

    if(caracterArr===''){
      phrase.className='space';
    }else {
      phrases.className='letter';
    }
  };
}


//create a check letter function
function checkLetter(letter){
for (let i=0 ; i<li.length ; i++){
  if (checkLetter===guessLetter){
    li[i].classList.show();
  }
else{
  li[i].classList.add('null');
}
}
}

//adding eventLitener to the keyboard

window.onkeyup =function(e){
  if (e.target.tagName==='button'){
    const target= e.target;
    const button=target;
  const keyrow=document.querySelectorAll('keyrow');
  window.querySelectorAll('button').disabled= false;

  }
  else {

  window.querySelectorAll('button').disabled=true;


checkLetter(target);
}
}
//letter appears in a phrase

function checkLetter(target){
  const foundLetter= null;
  const letter=document.getElementsByClassName('letter');
  const btn=target.textContent;
  for ( let i=0; i<letter.length; i++){
    //if matches found
    if(letter[i].textContent.toLowerCase==btn){
      letter[i].classList.add('show');
      const letterfound=letter[i].textContent;
    }
  }
}

//missed guesses in the game
if (ckeckLetter == null){
  const wrong=0;
  miss++;
  const letterFound =letter[i].textContent;
  miss=0;
  if (letter[i].textContent===null){
    const section= document.getElementsByClassName('tries');
letter[i].classList.remove('tries')[0];
miss++


  }
}
//create checkWin function

function checkWin(){


  const classShow= document.getElementsByClassName('show');
  const classLetter=document.getElementByClass('letters')
  if (classShow.length ===classLetter.length){
    overlay.classList.add('win');
    win++;
  }
} else if  {
  (missed>==5){

    overlay.classList.add('lose');
    lose--;
  }
}
