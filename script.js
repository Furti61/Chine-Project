document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
let TG = document.querySelector(".tg")
let VK = document.querySelector(".VK")
TG.addEventListener('click', function(){
    window.open("https://t.me/sudoChina")
})
VK.addEventListener('click', function(){
window.open('https://vk.com/id607427908')
})