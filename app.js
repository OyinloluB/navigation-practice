const price = document.querySelector('.price');
const name = document.querySelector('.name');
const relevance = document.querySelector('.relevance');

name.addEventListener('click', function(){
    name.classList.add('active');
    price.classList.remove('active');
    relevance.classList.remove('active');
});

relevance.addEventListener('click', function(){
    name.classList.remove('active');
    price.classList.remove('active');
    relevance.classList.add('active');
});

price.addEventListener('click', function(){
    name.classList.remove('active');
    price.classList.add('active');
    relevance.classList.remove('active');
})