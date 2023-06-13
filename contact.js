document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    
    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var number = document.getElementById("number").value;
    var message = document.getElementById("message").value;
    
    // Perform validation
    if (name.trim() === "" || email.trim() === "" || number.trim() === ""|| message.trim() === "") {
      alert("Please fill in all fields.");
      return;
    }
    
    // Display form data
    alert("Name: " + name + "\nEmail: " + email +"\number: " +number + "\nMessage: " + message);
    
    // Reset the form
    document.getElementById("contact-form").reset();
  });
  