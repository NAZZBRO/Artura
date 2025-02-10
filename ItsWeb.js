
document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", function() {
      let productName = this.getAttribute("data-product"); // Get product name
      let price = this.getAttribute("data-price"); // Get product price
      const wlink=('https://nazzbro.github.io/Artura/polaroid.jpg');//get link
      //let w_link=this.getAttribute("product-link");   
      let phone = "919633879383"; // WhatsApp number (with country code)
//8281071602    test num
      // Create a pre-filled WhatsApp message
      let message = encodeURIComponent(`Hello, I want to buy the ${productName} for ₹${price}. Is it available?`);
      
      let whatsappURL = `https://wa.me/${phone}?text=${message}%0A${wlink}`;

      // Open WhatsApp chat in a new tab
      //window.location.href = waLink;
      window.open(whatsappURL, "_blank");
  });
});




        
