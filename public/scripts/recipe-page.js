
const show1 = document.querySelector('.recipe-ingredients h6')
const show2 = document.querySelector('.recipe-preparation h6')
const show3 = document.querySelector('.recipe-info h6')
const ingredients = document.querySelectorAll('.ingredients-list li')
const preparation = document.querySelectorAll('.preparation-list p')
const information = document.querySelectorAll('.info-text p')


show1.addEventListener('click', () => {
    show1.classList.toggle('switch')

    if (show1.className === 'switch'){
        show1.innerHTML = 'MOSTRAR'
        for(let ing of ingredients){
            ing.classList.add('hidden')
        }
    } else {
        show1.innerHTML = 'ESCONDER'
        for(let ing of ingredients){
            ing.classList.remove('hidden')
        }
    }
})

show2.addEventListener('click', () => {
    show2.classList.toggle('switch')

    if (show2.className === 'switch'){
        show2.innerHTML = 'MOSTRAR'
        for(let prep of preparation){
            prep.classList.add('hidden')
        }
    } else {
        show2.innerHTML = 'ESCONDER'
        for(let prep of preparation){
            prep.classList.remove('hidden')
        }
    }
})

show3.addEventListener('click', () => {
    show3.classList.toggle('switch')

    if(show3.className === 'switch'){
        show3.innerHTML = 'MOSTRAR'
        for(let info of information) {
            info.classList.add('hidden')
        }
    } else {
        show3.innerHTML = 'ESCONDER'
        for(let info of information){
            info.classList.remove('hidden')
        }
    }
})
