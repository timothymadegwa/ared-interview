let notificationSection = document.getElementById('notifications');
function startServer(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let wall = document.getElementById('wall');
    let currentColour = wall.style.backgroundColor
        
    fetch("/api/start_server/",{
        body : JSON.stringify({current_colour : currentColour,}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        let servers = data.servers;
        notificationSection.innerHTML = "";
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">${servers} servers started</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`
        
        wall.style.backgroundColor = data.colour;
        
    });   
}

function stopServer(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let clock = document.getElementById('clock');
    let currentColour = clock.style.backgroundColor
        
    fetch("/api/stop_server/",{
        body : JSON.stringify({current_colour : currentColour,}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        let servers = data.servers;
        clock.style.backgroundColor = data.colour;
        notificationSection.innerHTML = "";
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">${servers} servers stopped</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`
        
    });   
}
function report(){
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    let hour = document.getElementById('hr-hand');
    let currentColour = hour.style.backgroundColor
        
    fetch("/api/report/",{
        body : JSON.stringify({current_colour : currentColour,}),
        method : "POST",
        headers :{
            "Content-Type" : "application/json",        
            "X-CSRFToken" : csrftoken,
        },
        mode: 'same-origin',
    })
    .then((res)=>res.json())
    .then((data)=>{
        let servers = data.servers
        hour.style.backgroundColor = data.colour;
        notificationSection.innerHTML = "";
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">${servers} servers running</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`

        
    });   
}
setInterval(startServer, 30000);
setInterval(stopServer, 40000);
setInterval(report, 50000);