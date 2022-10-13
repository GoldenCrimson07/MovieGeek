function Loading() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("loader-item").style.display="none"
  document.getElementById("main-content").style.display = "block";
}

function validateLogin(){
  const myuser = document.getElementById("username");
  const mypass = document.getElementById("pass");
  if(myuser.value.length<20){
    alert("length must be more than 19");
    console.log(myuser.value);
    return false;
  }else {
    return true;

  }
}
