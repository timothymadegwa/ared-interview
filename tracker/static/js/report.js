    let reportTable = document.getElementById('report-results')
    const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value;
    const reportTableBody = document.getElementById('report-table-body')
    reportTableBody.innerHTML = ""
fetch("/api/report"+"/6",{
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
            reportTableBody.innerHTML+= `
            <tr>
                <td>${item.program_time}</td>
                <td>${item.event}</td>
                <td>${item.message}</td>
                <td>${item.actual_time}</td>
                <td>${item.display_message}</td>
            </tr>`
        });
        reportTable.style.display = "block";

    }     
});