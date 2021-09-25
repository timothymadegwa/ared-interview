function processTransfer(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
    fetch("/api/sample",{
        body : JSON.stringify({receiver : receiver,}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        firstName.innerText = data.first_name
        lastName.innerText = data.last_name
        sendButton.removeAttribute('disabled');
        
    });
    
    
}
