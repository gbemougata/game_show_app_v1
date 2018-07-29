//create variables

const qwerty =document.getElementById('qwerty');
const phrase= document. querySelector('#phrase ul');
const  miss= 0;
let tries=5;

const startGame = document.querySelector('a.btn__reset');
const overlay = document.getElementById('overlay');
let phrases= ['monday','tuesday','wednesday','Thursday', 'friday'];
let win="";
let lose="";
let scoreboard = document.getElementById("scoreboard");


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

getRandomPhrasesArray(getRandomPhrasesArray(phrases));

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
//

  checkLetter(target);

  if (checkLetter == null){
      const wrong=0;
      console.log(wrong);
      miss++;
      const letterFound =letter[i].textContent;
      miss=0;

        const section= document.getElementsByClassName('tries');
    letter[i].classList.remove('tries')[0];
    miss++
    };
  }
  });







//letter appears in a phrase

function checkLetter(target){
  const foundLetter= null;
  const letter=document.getElementsByClassName('letter');
  const btn=target.textContent;
  for ( let i=0; i<letter.length; i++){
    //if matches found
    if(letter[i].textContent.toLowerCase()==btn){
      letter[i].classList.add('show');
      const letterfound=letter[i].textContent;
      //checkWin(win);
    }
  }
}


//create checkWin function

function checkWin(win){
  let luckLetter=document.getElementsByClassName("show");
  if (luckLetter.length===win[0].length){
    overlay.style.display='block';
    overlay.classList.add('show');

  }
}
  for (i=0; i<miss.length; miss++){
   if (miss>=5){
// let establish relationship between miss an lose
let lose=tries
document.createElement("lose");
lose.innerHtml="please try again!!"
let section=document.getElementByclassName("section");
//since we will thi appendChild on bottom of scorboard list
section.appendChild("lose");
overlay.setAttribute('class', "lose");
console.log('lose');

  }
}
