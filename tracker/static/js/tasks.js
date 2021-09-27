if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
} else{
    ready()
}
function ready(){
    let sessionId
    let startSessionBtn = document.getElementById('start-session');
    let notificationSection = document.getElementById('notifications');
    startSessionBtn.addEventListener('click', startSession);

    function startServer(){
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let wall = document.getElementById('wall');
        let currentColour = wall.style.backgroundColor
        let time = new Date().getTime();
                
        fetch("/api/start_server/",{
            body : JSON.stringify({current_colour : currentColour, current_time : time, session_id: sessionId}),
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
                        <div class="message">${new Date().toTimeString()} ${servers} servers started</div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div><br>
            </div>`
            
            wall.style.backgroundColor = data.colour;
            
        });   
    }

    function stopServer(){
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let clock = document.getElementById('clock');
        let currentColour = clock.style.backgroundColor;
        let time = new Date().getTime();
            
        fetch("/api/stop_server/",{
            body : JSON.stringify({current_colour : currentColour, current_time : time, session_id: sessionId}),
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
                        <div class="message">${new Date().toTimeString()} ${servers} servers stopped</div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div><br>
            </div>`
            
        });   
    }
    function status(){
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let hour = document.getElementById('hr-hand');
        let currentColour = hour.style.backgroundColor;
        let time = new Date().getTime();
            
        fetch("/api/status/",{
            body : JSON.stringify({current_colour : currentColour, current_time : time, session_id: sessionId}),
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
                        <div class="message">${new Date().toTimeString()} ${servers} servers running</div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div><br>
            </div>`

            
        });   
    }
    function startSession(){
        const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
        let time = new Date().getTime();
        
        notificationSection.innerHTML = "";
            notificationSection.innerHTML+=`
            <div class="col-md-8">
                    <div class="alert alert-success alert-dismissible text-center" >
                        <div class="message">Session started</div>
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div><br>
            </div>`
            fetch("/api/start_session/",{
                body : JSON.stringify({current_time : time}),
                method : "POST",
                headers :{
                    "Content-Type" : "application/json",        
                    "X-CSRFToken" : csrftoken,
                },
                mode: 'same-origin',
            })
            .then((res)=>res.json())
            .then((data)=>{
                sessionId = data.session_id;

            });
        startSessionBtn.disabled = true;
        setInterval(startServer, 30000);
        setInterval(stopServer, 40000);
        setInterval(status, 50000);
    }
    
}
