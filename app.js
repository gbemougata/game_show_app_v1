//create variables

const qwerty =document.getElementById('qwerty');
const phrase= document. querySelector('#phrase ul');
const  miss= 0;
const lives=5;



//const overlay = document.getElementById('overlay');
const startGame = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
let phrases= ['monday','tuesday','wednesday','Thursday', 'friday.'];

//addEvent listener

startGame.addEventListener('click', function() {
//console.log(startGame);
//if (startGame ===1){
  overlay.style.display='none';
//}else {
  //overlay.style.display='block';

//}
});

//phrases array


//get randomphrase array and use split methode on it.
function getRandomPhrasesArray(arr){
  var PhrasesArray= arr[(Math.floor(Math.random() * arr.length))];
  var NewPhrasesArray= PhrasesArray.split();
  return NewPhrasesArray;
}

getRandomPhrasesArray(getRandomPhrasesArray(phrases));

//create addPhraseToDisplay function

function  addPhrasesDisplay(arr){

    //create list item
    //let list =document.createElement('li');
    //const text=document.createTexteNode(arr);
    //phrase.appendChild(list);
    //not sure if i need to use textContent on list
    //list.appendChild(text);

let array=arr[0].split('');
console.log(array);



      for ( i=0; i< array.length; i++){

        let list =document.createElement('li');
        list.textContent=array[i];
        phrase.appendChild(list);
        //list.appendChild(text);


    if(array[i]===''){
      list.className='space';
    }else {
      list.className='letter';
    };
  };
};


  addPhrasesDisplay(getRandomPhrasesArray(phrases));
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
  if (e.target .tagName==='button'){
    const target= e.target;
    //const button=target;
  const keyrow=document.querySelectorAll('keyrow');
  window.querySelectorAll('button').disabled= false;

  }
  //else {

  //window.querySelectorAll('target').disabled=true;


 checkLetter(letter);


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
if (checkLetter == null){
  const wrong=0;
  miss++;
  const letterFound =letter[i].textContent;
  miss=0;

    const section= document.getElementsByClassName('tries');
letter[i].classList.remove('tries')[0];
miss++



}
//create checkWin function

function checkWin(){


  const classShow= document.getElementsByClassName('show');
  const classLetter=document.getElementByClass('letters');
  if (classShow.length ===classLetter.length){
    overlay.classList.add('win');
    win++;
    console.log(win);
  }
 else if
  (missed==5){

    overlay.classList.add('lose');
    lose--;
  }
}
}
