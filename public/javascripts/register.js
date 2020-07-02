




$('#template-contactform').submit(function(e){
  e.preventDefault();

const firstname = $('#template-contactform-firsname').val();
const lastname = $('#template-contactform-lastname').val();
const phone = $('#template-contactform-phone').val();
const email = $('#template-contactform-email').val();
const address = $('#template-contactform-address').val();
const ville = $('#template-contactform-ville').val();
const password = $('#template-contactform-password').val();
const confirmpassword = $('#template-contactform-confirmpassword').val();


  $.post( "http://192.168.43.233:4442/register", { firstname: firstname, lastname: lastname, password:password , confirmPassword:confirmpassword, email:email,address:address,city:ville, phone:phone})
    .done(function( data ) {
      alert( "Data Loaded: " + data );
    });
});
