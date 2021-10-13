window.addEventListener("keydown", function(e){  //Listen for keyboard

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Getting keyboad code
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running if no audio tag with key.
    
    audio.currentTime = 0; // Rewind to start on mutiple click
    audio.play();
    key.classList.add("playing")
    
    function removeTranstion (e){                   //Checks for transform property and remove class once playing has ended, if no trasform ignore
        if(e.propertyName !== 'transform') return;
        this.classList.remove("playing")
    }
    
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener ('transitionend', removeTranstion));

});

