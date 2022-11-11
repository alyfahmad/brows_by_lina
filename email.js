function sendMail() {
    var params = {
        from_name: document.getElementById("from_name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    const serviceID = "service_u5kfwip";
    const templateID = "template_3goia77";


    if(params.from_name !== '' && params.phone !== '') {
        emailjs.send(serviceID, templateID, params)
        // .then(
        //     res =>{
        //         // document.getElementById("from_name").value="";
        //         // document.getElementById("email").value="";
        //         // document.getElementById("phone").value="";
        //         // document.getElementById("message").value="";
        //         console.log(serviceID,templateID,params);
        //         alert("Message sent successfully");
        //     }
        // )
        // .catch((err) => console.log(err));
    }
}