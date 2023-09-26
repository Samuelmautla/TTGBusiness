 // Side Menu
 



// Slider



// Scrollspy


// Material Boxed


// Auto Complete


  <script src="https://kit.fontawesome.com/f06a2c7f61.js" crossorigin="anonymous"></script>

  // JavaScript to toggle WhatsApp popup visibility
document.addEventListener("DOMContentLoaded", function () {
  const popupContainer = document.getElementById("whatsapp-popup");
  const whatsappLink = document.querySelector(".whatsapp-link");

  // Replace "PHONENUMBER" with your desired WhatsApp number, including the country code
  const phoneNumber = "+27742267558";
  whatsappLink.href = `https://wa.me/${phoneNumber}`;

  // Toggle popup visibility
  popupContainer.addEventListener("click", function () {
    popupContainer.classList.toggle("active");
  });
});
