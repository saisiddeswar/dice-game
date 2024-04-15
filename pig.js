'use strict';
const score_1=document.querySelector('#score--0');
const score_2=document.querySelector('#score--1');
const dicele=document.querySelector('.dice');
const btnnew=document.querySelector('.btn--new');
const btnroll=document.querySelector('.btn--roll');
const btnhold=document.querySelector('.btn--hold');
const current0=document.getElementById('current--0');
const current1=document.getElementById('current--1');
const player0=document.querySelector('.player--0');
const player1=document.querySelector('.player--1');
 let playing=true;
let init=function()
{
   

}
const switchplayer=function(){
    document.getElementById(`current--${active}`).textContent=0;
        currentscore=0;
        active=active===0?1:0;
       
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');

}
const scores=[0,0];
let currentscore=0;
let active=0;

score_1.textContent=0;
score_2.textContent=0;
dicele.classList.add('hidden');
btnroll.addEventListener('click',function(){
    if(playing){
        const dice=Math.trunc(Math.random()*6)+1;
    console.log(dice);
    dicele.classList.remove('hidden');
    dicele.src=`dice-${dice}.png`;
    if(dice!==1)
    {
        currentscore+=dice;
        document.getElementById(`current--${active}`).textContent=currentscore;
    }
    else
    {
        switchplayer();
    }



    }
    

});
btnhold.addEventListener('click',function(){
    if(playing){
        scores[active]+=currentscore;
        document.getElementById(`score--${active}`).textContent=scores[active];
        if(scores[active]>=10)
        {
            playing=false;
            dicele.classList.add('hidden');
            document.querySelector(`.player--${active}`).classList.add('player--winner')
            document.querySelector(`.player--${active}`).classList.remove('player--active');
            
        }
        else{
            switchplayer();
        }

    }
   
    

})
btnnew.addEventListener('click',function(){
    currentscore=0;
    dicele.classList.add('hidden');document.getElementById(`score--${0}`).textContent=0
    document.getElementById(`score--${1}`).textContent=0;
    document.getElementById('current--1').textContent=0;
    document.getElementById('current--0').textContent=0;
    player0.classList.remove('player--winner')
    player1.classList.remove('player--winner')

    player0.classList.add('player--active');
    player1.classList.remove('player--active');

    



})





