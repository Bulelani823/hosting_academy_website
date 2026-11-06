// identifies that you are using JavaScript within the HTML page

      //Part 1: Automatic Date
      //Get the current date using the Date object
      var today = new Date();   

      //Format the date as DD/MM/YYYY
      //We add 1 to the month because it is zero-indexed(0 = Jan, 11 = Dec)
      var dateString = today.getDate() + '/' + (today.getMonth() + 1) + '/' + 
      today.getFullYear();

      //Find the HTML element with the id "currentData" and set its content documment.getElementById("currentDate").innerHTML = dateString
      document.getElementById("currentDate").innerHTML = dateString;

      //Part 2: Form Validation
      //Get references to the form and its elements

      var myform = document.getElementById("myForm");
      var fullNameInput = document.getElementById("fullname");
      var emailInput = document.getElementById("email");
      var subjectInput = document.getElementById("subject");
      var enquiryInput = document.getElementById("message")
      var nameErrorSpan = document.getElementById("nameError");
      var emailErrorSpan = document.getElementById("emailError");

      // Add an event listener to the form's submit button

      myForm.addEventListener("submit", function(event) {
        // Prevent the default form submissision (so we can validate first)
        event.preventDefault();

        // Assume the form is valid initially
        var isValid = true;

        // Clear previous error messages
        nameErrorSpan.innerHTML ="";
        emailErrorSpan.innerHTML = "";

        // 1 Validate the full name field
        if (fullNameInput.value.trim()
         === "") { // after removing spaces from the beginning and end of what the user typed is the result empty
            nameErrorSpan.innerHTML = "Name is required.";
            isValid = false;
        }

        // 2 Validate the email field
        // A simple Regex to check for a basic email pattern 
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(emailInput.value.trim()=== "") {
            emailErrorSpan.innerHTML = "Email is Required!";
            isValid = false;

        } else if (!
            emailPattern.test(emailInput.value)){
                emailErrorSpan.innerHTML = "Please enter a valid email address.";
                isValid = false;
            }

        // if the form is valid you can submit it or process the data 
        if(isValid){
            //Step 1: Get info entered
            var fullName = fullNameInput.value.trim();
            var email = emailInput.value.trim();
            var about = subjectInput.value.trim();
            var problem = enquiryInput.value.trim();

            //Step 2: Specify the email recipient
            var recipient = "mkhizebulelani94@gmail.com";

            //Step 3: Create the email subject
            var subject = "User Information";

            //Step 4: Create the email message
            var body = "Good Day,\n\n" +
            "My information is as follows:\n\n" +
            "Full Name:" + fullName + "\n" +
            "Email:" + email + "\n\n" +
            "Subject:" + about + "\n" +
            "Enquiry:" + problem + "\n\n" +
            "Kind Regards,\n" +
            fullName;

            //Step 5: create the mailto link
            var mailtoLink = "mailto:" +
            recipient + 
            "?subject=" + encodeURIComponent(subject) +
            "&body=" + encodeURIComponent(body); //these two things are going to be put in this variable and will transfer to the mailtoLink so they can both be printed

            //Step 6: Open the users default email application
            window.location.href = mailtoLink;
            
        }
        //Here you would typically use myForm.submit() to send the data to a server
        //For this example we will just show the alert and not the submit
        
      });
