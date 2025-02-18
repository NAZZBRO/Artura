document.querySelectorAll(".buy-button").forEach(button => {
  button.addEventListener("click", function () {
      let productName = this.getAttribute("data-product"); // Get product name
      let price = this.getAttribute("data-price"); // Get product price
      let wlink = this.getAttribute("data-link"); // Get link
      let phone = "919633879383"; // WhatsApp number (with country code)

      // Create a pre-filled WhatsApp message
      let message = encodeURIComponent(`Hello, I want to buy the ${productName} for ₹${price}. Is it available?`);
      let whatsappURL = `https://wa.me/${phone}?text=${message}%0A${wlink}`;

      // Open WhatsApp chat in a new tab
      window.open(whatsappURL, "_blank");

      // Show Thank You Message
      showPopupMessage();
  });
});

// Function to display the Thank You message
function showPopupMessage() {
  // Create the popup container
  let popupDiv = document.createElement("div");
  popupDiv.id = "thankYouPopup";
  popupDiv.innerHTML = `
      <div class="popup-content">
          
          <p>Thank you for your purchase! We will contact you soon. 😊</p>
      </div>
  `;

  // Style the popup
  popupDiv.style.position = "fixed";
  popupDiv.style.top = "50%";
  popupDiv.style.left = "50%";
  popupDiv.style.transform = "translate(-50%, -50%)";
  popupDiv.style.background = "rgba(0, 0, 0, 0.8)";
  popupDiv.style.color = "white";
  popupDiv.style.padding = "20px";
  popupDiv.style.borderRadius = "10px";
  popupDiv.style.textAlign = "center";
  popupDiv.style.zIndex = "1000";
  popupDiv.style.width = "300px";
  popupDiv.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.2)";

  // Add styles for popup content
  let popupContent = popupDiv.querySelector(".popup-content");
  popupContent.style.position = "relative";

  /* Style the close button
  let closeButton = popupDiv.querySelector(".close-btn");
  closeButton.style.position = "absolute";
  closeButton.style.top = "5px";
  closeButton.style.right = "10px";
  closeButton.style.fontSize = "20px";
  closeButton.style.cursor = "pointer";

  // Close the popup when clicking the close button
  closeButton.addEventListener("click", function () {
      popupDiv.remove();
  });*/

  // Append popup to the body
  document.body.appendChild(popupDiv);

  // Auto-remove after 5 seconds
  setTimeout(() => {
      popupDiv.remove();
  }, 10000);
}

        
