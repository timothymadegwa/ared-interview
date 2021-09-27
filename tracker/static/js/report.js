fetch("/api/report"+"/5",{
    body : JSON.stringify({search : searchVal,}),
    method : "GET",
    headers :{
        "Content-Type" : "application/json",        
        "X-CSRFToken" : csrftoken,
    },
    mode: 'same-origin',
})
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    if(data.length !== 0 ){
        data.forEach((item) => {
            searchTableBody.innerHTML+= `
            <tr>
                <td>${item.first_name} ${item.last_name}</td>
                <td>${item.username}</td>
                <td><a class="btn btn-sm btn-success rounded-pill" href="send/${item.id}">Send</a></td>
            </tr>`
        });
        searchTable.style.display = "block";

    }     
});