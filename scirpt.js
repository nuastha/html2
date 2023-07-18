//change and icon(dark mode) 
const mode = Document.quaryselector ('.mode');
const icon = Document.quaryselector ('.fa-moon');

mode.addEventlistener ('click', function(){
        document.body.classList.toggle('.dark-mode');

        if(document.body.classList.contains('.dark-mode')){
            icon.classList.remove('.fa-moon');
            icon.classList.add('.fa-sun');
    }
    else{
        icon.classList.remove('.fa-sun');
        icon.classList.add('.fa-moon');
    }
});