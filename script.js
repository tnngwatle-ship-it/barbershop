/* =========================
   SERVICE CATEGORY FILTER
========================= */

function filterServices(category) {
    const services = document.querySelectorAll(".service-item");

    services.forEach(service => {
        if (category === "all"){
            service.style.display = "block";
        
        } else if (service.classList.contains(category)){
            service.style.display = "block";
        } else {
            service.style.display = "none";
        }
    });
}
    
 

/* =========================
   SMOOTH SCROLL
========================= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


function filterServices(category) {
    const services = document.querySelectorAll(".service-item");

    services.forEach(service => {
        if (category === "all" || service.classList.contains(category)) {
            service.style.display = "";
        } else {
            service.style.display = "none";
        }
    });
}
/* =========================
   BOOKING FORM WHATSAPP
========================= */

const bookingForm = document.getElementById("bookingform");

if (bookingForm) {
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value;
        const service = document.getElementById("service").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;
        const message = document.getElementById("message").value;

        const phoneNumber = "27608060362"; 

        const text = `Hello Unity's Barbershop,%0A
Name: ${name}%0A
Service: ${service}%0A
Date: ${date}%0A
Time: ${time}%0A
Notes: ${message}`;

        const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;
        window.open(whatsappURL, "_blank");
    });
}
