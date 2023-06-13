var imageContainers = document.querySelectorAll('.image-container');

imageContainers.forEach(function(container) {
  container.addEventListener('mouseenter', function() {
    this.querySelector('.overlay').style.opacity = '1';
  });

  container.addEventListener('mouseleave', function() {
    this.querySelector('.overlay').style.opacity = '0';
  });
});
