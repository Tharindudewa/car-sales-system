/* Scroll Animation for Car Cards */

window.addEventListener("scroll", function () {

    const cards = document.querySelectorAll(".car-item");

    cards.forEach(function(card){

        let position = card.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if(position < screenHeight - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});


/* Button Hover Effect */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(btn){

    btn.addEventListener("mouseover", function(){

        btn.style.transform = "scale(1.05)";

    });

    btn.addEventListener("mouseout", function(){

        btn.style.transform = "scale(1)";

    });

});


/* Contact Seller Button Message */

const contactBtn = document.querySelector(".car-info button");

if(contactBtn){

    contactBtn.addEventListener("click", function(){

        alert("Seller will contact you soon!");

    });

}