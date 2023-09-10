// let myHttp=  new XMLHttpRequest()
// fetch("https://jsonplaceholder.typicode.com/post")
// // myHttp.send()
// myHttp.addEventListener("readystatechange",function () {

// if(myHttp.readyState==4){

//     console.log("status",myHttp.status);
//     console.log("readystate",myHttp.readyState);

// }
// })

adddata=[]
async function getddd() {
    let x = await fetch("https://jsonplaceholder.typicode.com/users?fbclid%3DIwAR1HX5HlkjTXcuTkqheKRYqlSS6gTeKdG3KIsCB_W8G2vZ_EOmRupr4qcEU_aem_Ab-4SWWQ_IftFciMigeH4Drb4VlfN4FID12HtieMWs5pWUpVhsEetvk_557MRVZTFis&h=AT3YLTVk8NCOAjZQXNMqgO-nETxTjGiu1BTuHNKR6PI7FpNxd1REK12HUrS73jBqOssDvd4yARL4z3B4ehtHJ11vE0DcoEDdYPYrEYg3vAeIhFSb0-0mGoUrkAXIjcI&s=1&mibextid=ncKXMA")
    let dat = await x.json()
    adddata=dat

    display()
}
getddd()
function display(){
console.log(adddata);
    temp=""
        for(var i =0;i<adddata.length;i++){
        temp +=`  <tr>
        <td>` +adddata[i].id+` </td>
        <td>`+adddata[i].name+ ` </td>
        <td>` +adddata[i].username+`</td>
        <td>` +adddata[i].address.street+`</td>
        <td>`+adddata[i].email+` </td>
        <td>`+adddata[i].address.street+` </td>
        <td>`+adddata[i].address.suite+` </td>
        <td>`+adddata[i].address.city+` </td>
        <td>`+adddata[i].address.zipcode+` </td>
        <td>`+adddata[i].address.geo.lat+` </td>
        <td>`+adddata[i].address.geo.lng+` </td>
        
    </tr>`
    }
    document.getElementById("tableData").innerHTML = temp;
    
}
