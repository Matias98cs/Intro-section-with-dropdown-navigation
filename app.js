const iconoMenu = document.querySelector('#icono-menu')
const menu = document.querySelector('#menu');
const labelTag = document.querySelector('#label-active');
const lableTagTwo = document.querySelector('#label-active-two')
const arrowUp = document.querySelector('.fa-chevron-up');
const arorwITwo = document.querySelector("#arrow-i-two")


const featuresA = document.querySelector('#features');
const divFeatures = document.querySelector('#featuresConteiner');
const company = document.querySelector('#company')
const divCompany = document.querySelector('#companyContainer')


const feaIcon = document.querySelector('#faeIcon');
const comIcon = document.querySelector('#comIcon');



lableTagTwo.addEventListener('click', cambiarArrow)
labelTag.addEventListener('click', cambiarArrow)

iconoMenu.addEventListener('click', () => {
    if(iconoMenu.classList.contains('fa-bars')) {
        iconoMenu.classList.remove('fa-bars');
        iconoMenu.classList.add('fa-xmark')
    } else {
        iconoMenu.classList.remove('fa-xmark');
        iconoMenu.classList.add('fa-bars')
    }

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

});


featuresA.addEventListener('click', mostrarOcultar)
company.addEventListener('click', mostrarOcultar)



function mostrarOcultar(e) {

    if(e.target.id === 'features') {

        if(divFeatures.classList.contains('features')) {
            feaIcon.classList.remove('fa-chevron-up')
            feaIcon.classList.add('fa-chevron-down')

            divFeatures.classList.add('show');
            divFeatures.classList.remove('features');

        } else {

            feaIcon.classList.remove('fa-chevron-down')
            feaIcon.classList.add('fa-chevron-up')

            divFeatures.classList.remove('show');
            divFeatures.classList.add('features')
        }
    } else {
        if (divCompany.classList.contains('company')) {
            comIcon.classList.remove('fa-chevron-up')
            comIcon.classList.add('fa-chevron-down')


            divCompany.classList.add('show');
            divCompany.classList.remove('company')
        } else {
            comIcon.classList.remove('fa-chevron-down')
            comIcon.classList.add('fa-chevron-up')




            divCompany.classList.remove('show');
            divCompany.classList.add('company')
        }
    }
}

function cambiarArrow(e) {

    if (e.target.id === 'label-active') {
        if(arrowUp.classList.contains('fa-chevron-up')) {
            arrowUp.classList.remove('fa-chevron-up');
            arrowUp.classList.add('fa-chevron-down');
    
        } else {
            arrowUp.classList.remove('fa-chevron-down');
            arrowUp.classList.add('fa-chevron-up');
    
        }


    } else {
        if(arorwITwo.classList.contains('fa-chevron-up')) {
            arorwITwo.classList.remove('fa-chevron-up');
            arorwITwo.classList.add('fa-chevron-down');
    
        } else {
            arorwITwo.classList.remove('fa-chevron-down');
            arorwITwo.classList.add('fa-chevron-up');
        }
    }
}







