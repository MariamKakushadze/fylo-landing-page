function mailVal() {
    let mail = document.getElementById("emailAddress").value;
    let format =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail != '') {    
        if( !mail.match(format)){
          document.getElementById("mail-error").innerHTML = "Please check your mail";
          document.getElementById("emailAddress").style.border = "2px solid red";
          return false;
        }else{
          document.getElementById("mail-error").innerHTML = "";
          document.getElementById("emailAddress").style.border = "none";
          return true;
        }
    }
  }
  function WmailVal() {
    let mail = document.getElementById("purple-bg-email").value;
    let format =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(mail != '') {    
        if( !mail.match(format)){
          document.getElementById("white-mail-error").innerHTML = "Please check your mail";
          document.getElementById("purple-bg-email").style.border = "2px solid red";
          return false;
        }else{
          document.getElementById("white-mail-error").innerHTML = "";
          document.getElementById("purple-bg-email").style.border = "none";
          return true;
        }
    }
}