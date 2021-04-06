'use strict';

function getRandom(min,max){
  return Math.floor(Math.random()*(max*min-1)+min);
}

const items=['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicorn','usb','water-can','wine-glass'];

const leftImage =document.getElementById('left-image');
const medImage =document.getElementById('med-image');
const rightImage =document.getElementById('right-image');
const imageSection =document.getElementById('image-section');

function Bus(name){
  this.name=name;
  this.path='./assets'+name+'.jpg';
  this.votes=0;
  this.views=0;
  Bus.all.push(this);
}
Bus.all=[];

for (let i = 0; i < items.length; i++) {
    new Bus(items[i]);
}