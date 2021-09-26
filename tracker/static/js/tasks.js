function startServer(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
    fetch("/api/start_server/",{
        body : JSON.stringify({name : "some text",}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.colour);
        let wall = document.getElementById('wall');
        wall.style.backgroundColor = data.colour;
        
    });   
}

function stopServer(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
    fetch("/api/stop_server/",{
        body : JSON.stringify({name : "some text",}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.colour);
        let clock = document.getElementById('clock');
        clock.style.backgroundColor = data.colour;
        
    });   
}
function report(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        
    fetch("/api/report/",{
        body : JSON.stringify({name : "some text",}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data.colour);
        let hour = document.getElementById('hr-hand');
        hour.style.backgroundColor = data.colour;
        
    });   
}

