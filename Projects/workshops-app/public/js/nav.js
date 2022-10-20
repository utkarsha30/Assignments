const toggler = document.querySelector('.menu-toggler');

toggler.addEventListener('click',function(){
    const mainMenuLink = document.querySelectorAll('.menu-link');

    for(let i=0;i< mainMenuLink.length;i++){
        mainMenuLink[i].classList.toggle('d-sm-none');
    }
});