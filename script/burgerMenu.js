window.onload = function() {
    let $trigger = document.getElementById("trigger");

    $trigger.addEventListener('click', (e) => {
        handleDropDown()
    });
};

function handleDropDown() {
    let navMenu = document.getElementById("header-nav");
    if (navMenu.style.display === "flex") {
        navMenu.style.display = "none";
    } else {
        navMenu.style.display = "flex";
    }
};