"use strict";

const wrapper = document.querySelector('.wrapper');

const layers = [...document.querySelectorAll('.layers')];




function run (e) {
    
layers.map((el, i) =>{
      if (layers.indexOf(e.target) < i) {
          el.classList.add('none');
      }
  } )
}

wrapper.addEventListener('click', run);

window.addEventListener("keydown", function(e) {//we hang up the handler on window in order to use for closing modal by pressing on Escape
    if (e.key === 'Escape'){ //check that it is Escape
        let arrLayers = [...document.querySelectorAll('.layers')].reverse();//We select all the DOM elements and do the reverse array
        for(let el of arrLayers) { //
            if (!el.classList.contains('none')){//if there is no class in the element
                el.classList.add('none');//add it to the element
                break;//exit the cycle
            }
        }
    }
    
})
