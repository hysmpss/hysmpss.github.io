// Get the modal
var modal = document.querySelectorAll(".gallery-modal");

// Get the image and insert it inside the modal
var img = document.querySelectorAll(".gallery-thumbnail");
var modalImg = document.querySelectorAll(".modal-image");

// Get the close button
var close = document.querySelectorAll(".modal-close");

// Add event listener to each thumbnail image
for (var i = 0; i < img.length; i++) {
  img[i].addEventListener("click", function() {
    // Show the modal
    this.nextElementSibling.style.display = "block";
    // Set the image source for the modal
    this.nextElementSibling.firstElementChild.src = this.src;
  });
}

// Add event listener to each close button
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function() {
    // Hide the modal
    this.parentElement.style.display = "none";
  });
}
