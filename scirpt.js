//change and icon(dark mode) 
const mode = document.queryselector('.mode');
const icon = document.queryselector('.fa-moon');

const icon = document.queryselector('.garuda-black');

mode.addEventListener('click', function(){
        document.body.classList.toggle('.dark-mode');

        if(document.body.classList.contains('.dark-mode')){
            icon.classList.remove('.fa-moon');
            icon.classList.add('.fa-sun');
            garuda.classList.add('garuda-black');
    }
    else{
        icon.classList.remove('.fa-sun');
        icon.classList.add('.fa-moon');
        garuda.classList.remove('garuda-black');
    }
});