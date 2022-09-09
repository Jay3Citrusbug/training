
$(document).ready(function(){
  
    function emailCheck(){
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
       
        if($("#email").val()==""){
           $("#email_error").text("please enter email")
        }
        
        
        
        else{
            $("#email_error").text("")
            
            if(!validRegex.test($("#email").val())){
                $("#email_error").text("")
                $("#email_error").text("Invalid email address!")
                }
            }
        };
    
    
    function passwordCheck(){
        if($("#password").val()==""){
            $("#password_error").text("please enter password")
        }
        else{
            $("#password_error").text("")
        }
    }; 
    
    function varifypassword(){
        if($("#confirmpassword").val()!=($("#password").val())){
            
            $("#confirmpass_error").text("password does not match")
        }
        else{
            $("#confirmpass_error").text("")
        }
    }; 
    
    

    // $("#first_name").on("input", firstNameCheck)
    // $("#last_name").on('input', lastNameCheck)
    // $("#email").on('input', emailCheck)
    // $("#password").on('input', passwordCheck)
    // $("#submit").on('click', gendercheck)
    // $("#phone ").on('input', phonenoCheck)
    
    $("#submit").on('click', function(){

        if ($("#first_name").val()==""){
            $("#first_name_error").text("Please enter first name")
        }
        else{
            $("#first_name_error").text("")
        }

        if($("#last_name").val()==""){
            $("#last_name_error").text("please enter last name")
        }
        else{
            $("#last_name_error").text("")
        }

        emailCheck()
        passwordCheck()
        varifypassword()

        if ($("input:radio[name='gender']").is(':checked'))
        {
            $("#gender_error").text("")
        }
        else{
            $("#gender_error").text("please select at least one")
        }

        if($("input:checkbox[name='check']:checked").length>0)
        {
            $("#checkbox_error").text("")
        }
        else{
            $("#checkbox_error").text("please select at least one")
        }

        var validRegex = /[6789]{1}[0-9]{9}/;
        if($("#phone").val()==""){
            $("#phoneno_error").text("please enter no.")
         }
      
        
        else{
            $("#phoneno_error").text("")
            
            if(!validRegex.test($("#phone").val())){
                
                $("#phoneno_error").text("invalid number")
                }
            
            }
      
    })

    
    



    


})

