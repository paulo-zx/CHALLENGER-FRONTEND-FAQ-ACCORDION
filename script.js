/*
let accordions = document.querySelectorAll('.pergunta');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        let panel = this.nextElementSibling;
        panel.classList.toggle('card-open');
        this.classList.toggle('active');
        let arrow = this.lastElementChild;
        arrow.classList.toggle('open');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})
*/

/*
let accordions = document.querySelectorAll('.pergunta');
let accordions2 = document.querySelectorAll('.resposta');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        accordions2 = this.nextElementSibling;
        accordions2.classList.toggle('card-open');
        this.classList.toggle('active');
        let arrow = this.lastElementChild;
        arrow.classList.toggle('open');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})
*/

let accordions = document.querySelectorAll('.pergunta');
let accordions2 = document.querySelectorAll('.resposta');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        accordions2 = this.nextElementSibling;
        accordions2.classList.toggle('card-open');
        this.classList.toggle('active');
        let arrow = this.lastElementChild;
        arrow.classList.toggle('open');
    })
})



let im1=document.getElementById('imgbox').setAttribute('src', './images/illustration-woman-online-mobile.svg');
