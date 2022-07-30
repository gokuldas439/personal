$(document).ready(function(){
    $("#gform").validate({
       rules: {
        name:{
            required:true,
            minlength:4
        },
        subject:{
            required:true,
            minlength:6
        },
        phone:{
            required:true,
            digits:true,
           minlength:10,
           maxlength:10
        },
        email:{
            required:true,
            email:true
        },
        message:{
            required:true,
            minlength:5
        }
    },
    messages: {
        name:{
            required:"Please enter your name"
        },
        subject: {
            required:"Please enter your subject"

        },
        phone:{
            required:"Please enter a valid mobile number",
            minlength:"Enter 10 digits",
            maxlength:"Enter 10 digits"
        },
        email:{
            required:"Enter a valid email address"
        },
        message:{
            required:"Enter your message"
           
        },

    },
    submitHandler: function (form) {
           
        $("#gform").submit((e)=>{
            e.preventDefault()
            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbwqU6qdrHk1EcKn8txzSSQt6lVNDToj22Qte8YzNfqjFlZcRDI/exec",
                data:$("#gform").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    window.location.reload()
                   
                },
                error:function (err){
                    
                    alert("Something Error")
    
                }
            });
        });
    },
});

let refreshPage = () => {
    window.location.reload();
}

});
      
       

