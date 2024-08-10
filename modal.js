let btn=document.getElementById('btn');
let main=document.querySelector('.main');

btn.addEventListener('click',()=>{
    main.style.visibility='visible';
})
main.addEventListener('click',()=>{
    main.style.visibility='hidden';
})
