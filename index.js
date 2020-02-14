//jshint esversion:6
window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const drum= document.querySelectorAll(".drum");
  
  drum.forEach((d, index) => {
    d.addEventListener("click", function() {

      if(sounds[index].paused){

         sounds[index].play();

       } else  {
         sounds[index].pause();

       }


    });
  });
});
