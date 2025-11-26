function sentMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    }

const serviceID = "service_gyxd3jr";
const templteID = "template_mdzn1sa";

emailjs
.send(serviceID,templteID,params)
.then((res)=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent seccussfully");  
    })
.catch((err) => console.log(err));
}