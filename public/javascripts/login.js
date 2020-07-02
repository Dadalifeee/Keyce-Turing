

$('#login-form').submit(function(e){
  e.preventDefault();

const mail = $('#login-form-mail').val();
const password = $('#login-form-password').val();
console.log("dsfsdf");


  $.post( "http://192.168.43.233:4442/login", { email:mail, password: password})
    .done(function( data ) {
      alert( "Data Loaded: " + data );
       data = JSON.parse(data);
        Cookies.set("id",data.id);
        Cookies.set("token", data.token);

    }).fail(function(err) {
        console.log(err);
  });
});
