// addEventListener("submit", async(e)=>{
//     e.preventDefault();
//     let data = Object.fromEntries(new FormData(e.target));
//     let config = {
//         method: e.target.method, 
//         headers: {
//             'Content-Type': 'application/json',
//             'x-version': "1.1.0"
//         }, 
//         body:JSON.stringify(data)
//     }
//     let peticion = await fetch(e.target.action, config)
//     let res = await peticion.json();
//     console.log(res);
//     location.href = "/home/v1.1.0"
// })