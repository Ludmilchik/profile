var holidays = document.querySelector('#rec475252146');
var conferences = document.querySelector('#rec475290426');
var itDrive = document.querySelector('#rec475290993');
var itEntrance = document.querySelector('#rec475291767');
var blockOne = document.querySelector('#rec475247422')
var blockTwo = document.querySelector('#rec475295299')
var blockThree = document.querySelector('#rec475296048')
var blockFour = document.querySelector('#rec475296567')

var events = [holidays, conferences, itDrive, itEntrance]
var blocks = [blockOne, blockTwo, blockThree, blockFour]

events.forEach((i) => i.style.display = 'none')
blocks.forEach((i) => i.style.display = 'none')

holidays.style.display = 'block'
blockOne.style.display = 'block'

document.querySelector('.tn-elem__4752474221659425768658').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  conferences.style.display = 'block';
  blockTwo.style.display = 'block';
})

document.querySelector('.tn-elem__4752474221659425768694').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itDrive.style.display = 'block';
  blockThree.style.display = 'block';
})

document.querySelector('.tn-elem__4752474221659425768685').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itEntrance.style.display = 'block';
  blockFour.style.display = 'block';
})

document.querySelector('.tn-elem__4752952991659425768664').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  holidays.style.display = 'block';
  blockOne.style.display = 'block';
})

document.querySelector('.tn-elem__4752952991659425768694').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itDrive.style.display = 'block';
  blockThree.style.display = 'block';
})

document.querySelector('.tn-elem__4752952991659425768685').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itEntrance.style.display = 'block';
  blockFour.style.display = 'block';
})

document.querySelector('.tn-elem__4752960481659425768664').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  holidays.style.display = 'block';
  blockOne.style.display = 'block';
})

document.querySelector('.tn-elem__4752960481659425768658').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  conferences.style.display = 'block';
  blockTwo.style.display = 'block';
})

document.querySelector('.tn-elem__4752960481659425768685').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itEntrance.style.display = 'block';
  blockFour.style.display = 'block';
})

document.querySelector('.tn-elem__4752965671659425768664').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  holidays.style.display = 'block';
  blockOne.style.display = 'block';
})

document.querySelector('.tn-elem__4752965671659425768658').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  conferences.style.display = 'block';
  blockTwo.style.display = 'block';
})

document.querySelector('.tn-elem__4752965671659425768694').addEventListener('click', () => {
  events.forEach((i) => i.style.display = 'none')
  blocks.forEach((i) => i.style.display = 'none')
  itEntrance.style.display = 'block';
  blockFour.style.display = 'block';
})