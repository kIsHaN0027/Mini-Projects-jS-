'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// it is used to remove hidden class from html which will allow the modal to be displayed when button is clicked
  const openModal = function(){
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  }

//   it is used to add the hidden class which makes the modal class dissapear when clicked on close icon or outside the modal
  const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
 }


for(let i = 0; i < btnsOpenModal.length; i++) 
    btnsOpenModal[i].addEventListener('click', openModal);

    btnCloseModal.addEventListener('click', closeModal); 
    overlay.addEventListener('click', closeModal);

    // closing the modal by esc key
    document.addEventListener('keydown',function(e){
        console.log(e.key);
        if(e.key === 'Escape' && !modal.classList.contains('hidden')){
                closeModal();
        }
    });