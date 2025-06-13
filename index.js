
const form         = document.getElementById("contactForm");
const thankYOuMsg  = document.getElementById("thankYou");

form.addEventListener('submit', function(e){
    e.preventDefault();

    const errorElements = document.querySelectorAll('.error-msg');
    errorElements.forEach(el=>el.style.display="none");

    const firstName  = document.getElementById("firstName").value.trim();
    const lastName   = document.getElementById("lastName").value.trim();
    const email      = document.getElementById("email").value.trim();
    const message    = document.getElementById("message").value.trim();
    const consent    = document.getElementById("consent").value.trim();

    let isValid = true;

    if(firstName === ""){
        document.getElementById('name-error').textContent = 'Name is required';
        document.getElementById('name-error').style.display = 'block';
        isValid = false;
    }
  
     if(lastName === ""){
        document.getElementById('last-name-error').textContent = 'Last Name is required';
        document.getElementById('last-name-error').style.display = 'block';
        isValid = false;
    }
    
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(email === '' || !emailPattern.test(email)){
        document.getElementById('email-error').textContent = 'valid email is required';
        document.getElementById('email-error').style.display = 'block';
        isValid = false;
    }
  
     if(message === ""){
        document.getElementById('message-error').textContent = 'Message is required';
        document.getElementById('message-error').style.display = 'block';
        isValid = false;
    }

     if(consent === ""){
        document.getElementById('consent-error').textContent = 'consent is required';
        document.getElementById('consent-error').style.display = 'block';
        isValid = false;
    }


  if(isValid){
     setTimeout(()=>{
        form.style.display = "none";
        thankYOuMsg.style.display = "block";

    },500);

  }
   
});



// custom animated cursor
// modal practice

const modalBtn = document.getElementById("my-btn");
const myModal  = document.getElementById("my-modal");
const closeBtn = document.getElementById("closeModal");

modalBtn.addEventListener('click',()=>{

    myModal.style.display="block";
    
    
});

closeBtn.addEventListener('click',()=>{
   myModal.style.display="none";
});

window.addEventListener('click', (e) => {
  if (e.target === myModal ) {
    myModal.style.display = 'none';
  }
});




window.addEventListener("load", function(){

  if(!localStorage.getItem("modalShown")){
     setTimeout(() => {
        document.getElementById("customModal").style.display = "flex";

        localStorage.setItem("modalShown", "true");
      }, 5000);
  }

document.getElementById("closeBtn").addEventListener("click", function(){
  document.getElementById("customModal").style.display="none";
});
});