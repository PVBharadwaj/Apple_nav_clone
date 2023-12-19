document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const dropbtn = document.querySelectorAll('.drop-down');
    const dropdown = document.querySelectorAll('.dropdown-content');
    const down = document.querySelector('.down');

    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    dropbtn.forEach(function (btn, index) {
        btn.addEventListener('click', function () {
            this.classList.toggle('active');
            dropdown[index].classList.toggle('active');
            down.classList.toggle('active');
        });
    });

    down.addEventListener('click', function () {
        this.classList.remove('active');
        dropdown.forEach(function (item) {
            item.classList.remove('active');
        });
    });
});