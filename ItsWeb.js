

// Collect all buttons with a common class name or ID pattern
const buyButtons = document.querySelectorAll('.buy-button'); // Select all elements with class 'buy-button'

// Add event listener to each button
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        const userChoice = confirm('Do you want to continue in Instagram?');
        if (userChoice) {
            window.location.href = "https://www.instagram.com/_keyes_fashions?igsh=MXVxaTM4b3RoM2FrbA==";
        }
    });
});



const images = document.querySelectorAll('.product-image');
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("img01");
  const close = document.getElementsByClassName("close")[0];

  // Loop through all images and add click event listener for preview
  images.forEach((image) => {
    image.addEventListener('click', function() {
      modal.style.display = "block"; // Show the modal
      modalImg.src = this.src; // Set modal image to clicked image source
      modalImg.alt = this.alt;
    });
  });

  // Close the modal when clicked on 'X'
  close.addEventListener('click', () => {
    modal.style.display = "none"; // Hide modal
  });

  // Close modal if clicked anywhere outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none"; // Close the modal
    }
  });








        
