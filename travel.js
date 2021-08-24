let searchbtn = document.getElementById("search-btn");
let searchbar = document.querySelector(".search-bar-container");
let cancelbtn = document.getElementById("form-cancel");
let  loginform = document.querySelector(".login-form");
let loginbtn = document.getElementById("usert-btn");
let menubtn = document.querySelector(".menu");
let menu = document.querySelector(".menucontent");
let menuu = document.querySelector(".menubtnn");
let videobtn = document.querySelectorAll(".vid-btn");

window.onscroll = ()=>{
    searchbtn.classList.remove("fa-times");
    searchbar.classList.remove("active");
    loginform.classList.remove('activeform');
}

searchbtn.addEventListener('click',()=>{

    searchbtn.classList.toggle("fa-times");
    searchbar.classList.toggle("active");

});

loginbtn.addEventListener('click',()=>{
    loginform.classList.add('activeform');
});

cancelbtn.addEventListener('click',()=>{
    loginform.classList.remove('activeform');
});

menubtn.addEventListener('click', ()=>{
    menu.classList.toggle("activemenu");
    menuu.classList.toggle("fa-times");
});

videobtn.forEach(btn =>{
    btn.addEventListener('click', () =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let srcc = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = srcc;
        });
});

      