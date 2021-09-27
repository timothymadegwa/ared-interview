function reverseChildren(parent) {
    for (var i = 1; i < parent.childNodes.length; i++){
        parent.insertBefore(parent.childNodes[i], parent.firstChild);
    }
}
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
        console.log(data.colour);
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">This is a start notification</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`
        
        wall.style.backgroundColor = data.colour;
        reverseChildren(notificationSection)
        
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
        console.log(data.colour);
        
        clock.style.backgroundColor = data.colour;
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">This is a end notification</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`
        reverseChildren(notificationSection)
        
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
        console.log(data.colour);
        
        hour.style.backgroundColor = data.colour;
        notificationSection.innerHTML+=`
        <div class="col-md-8">
                <div class="alert alert-success alert-dismissible text-center" >
                    <div class="message">This is a report notification</div>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div><br>
        </div>`
        reverseChildren(notificationSection)
        
    });   
}
setInterval(startServer, 30000);
setInterval(stopServer, 40000);
setInterval(report, 50000);