const mainfaq = document.querySelectorAll('.mainfaq');
mainfaq.forEach(x=>{
    x.addEventListener('click',()=>{
        x.classList.toggle('active');
    })
})