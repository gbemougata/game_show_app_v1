//create variables

const qwerty =document.getElementById('qwerty');
const phrase= document. querySelector('#phrase ul');
let   miss= 0;
let tries=0;
let highestMissed=5;
//const tries=document.getElementsByTagName('tries')[i];




const startGame = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
let phrases= ['january','february','mars','april', 'mai'];
let win="";
let lose="";
let scoreboard = document.getElementById("scoreboard");
const mainHead = document.getElementsByClassName("title").value;
const winTxt = document.createTextNode("You won! congratulation");
const lostTxt = document.createTextNode("Sorry you lost", "please try again");




//addEvent listener

startGame.addEventListener('click', function() {

  overlay.style.display='none';
});

//phrases array


//get randomphrase array and use split methode on it.
function getRandomPhrasesArray(arr){
  var PhrasesArray= arr[(Math.floor(Math.random() * arr.length))];
  var NewPhrasesArray= PhrasesArray.split();
  return NewPhrasesArray;
}



//create addPhraseToDisplay function

function  addPhrasesDisplay(arr){


let array=arr[0].split('');
console.log(array);

let win=arr

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


qwerty.addEventListener('click',function(e){
  if (e.target .tagName==='BUTTON'){
    const target= e.target;
    const button=target;
const foundLetter= checkLetter(target);

  checkLetter(target);

  if (foundLetter== null){
      miss++;
      if(miss>=1 && miss<=highestMissed){
        let lives=document.querySelector('.tries').firstChild;
        lives.src='./images/lostHeart.png';
        lives.parentElement.classList.add('tried');
        lives.parentElement.classList.remove('tries');
        for(i =0; i<button.length; i++){
          if (button[i].textContent===event){
            button[i].classList.add('miss');
            foundLetter();
            console.log('checkLetter');
            checkWin();
          }
        }
      }

    };
  }
  });



//letter appears in a phrase

function checkLetter(target){
  let foundLetter= null;
  match=event

  const letter=document.getElementsByClassName('letter');
  const btn=target.textContent;
  for ( let i=0; i<letter.length; i++){
    //if matches found
    if(letter[i].textContent.toLowerCase()==btn){
      letter[i].classList.add('show');
      foundLetter=letter[i].textContent;


    }
  }
  return foundLetter;
};

function CheckWin(){
  //append winText and loseText to the mainHead
  mainHead.apendChild("winTxt");
  mainHead.appendChild("loseTxt");
  const categoryLetter=document.querySelectorAll(".letter");
  const categoryClass=document.querySelector('.show');

  if(categoryLetter.length===categoryClass.length){

    overlay.setAttribute('class','win');
mainHead.firstChild.nodeValue = "You won! congratulation";
overlay.style.display = 'none';

  }
  else if (miss>=highestMissed){
    overlay.setAttribute('class','lose');
    overlay.style.display = 'none';
    mainHead.firstChild.nodeValue ="Sorry you lost", "please try again";
    reset();
  }
};
