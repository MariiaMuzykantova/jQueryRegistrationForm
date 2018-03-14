$().ready(function() {
   
    $("#signupForm").validate({
        
        // var in1 = document.getElementById('firstname'),
        rules: {
            firstname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 40
            },
            address: {
                required: true,
                minlength: 5,
                maxlength: 50
            },
            zipcode: {
                required: true,
                number: true
            },
            country: "required",
            company: "required",
            agree: "required",
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            firstname: {
                required: "Please enter your first name",
                minlength: "Please lengthen the text to 2 characters or more (you are currently using " + ($('#firstname').length) + " characters).",
                maxlength: "Please lengthen the text less than 40 characters (you are currently using " + ($("#firstname").length) + " characters)."
            },
            lastname: {
                required: "Please enter your last name",
                minlength: "Please lengthen the text to 2 characters or more (you are currently using " + ($("#lastname").length) + " characters).",
                maxlength: "Please lengthen the text less than 40 characters (you are currently using " + ($("#lastname").length) + " characters)."
            },
            address: {
                required: "Please enter your address",
                minlength: "Please lengthen the text to 5 characters or more (you are currently using " + ($('#address').length) + " characters).",
                maxlength: "Please lengthen the text less than 50 characters (you are currently using " + ($("#address").length) + " characters)."
            },
            zipcode: {
                required: "Please enter your zipcode",
                number: "Please use only numbers"
            },
            country: "Please enter your country",
            company: "Please enter your company name",
            agree: "Please choose payment method",
            email: {
                required: "Please enter your valid email",
                email: "Please enter valid email"
            }
        }
    });
    $('.js-example-basic-single').select2();
});