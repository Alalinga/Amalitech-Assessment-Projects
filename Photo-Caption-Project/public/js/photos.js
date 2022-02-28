
const container = document.querySelector("#container")
//console.log(process.cwd)
container.innerHTML ='';
fetch('/api/photos').then(res=>{
    if(res.ok){
        return res.json();
    }
}).then(res=>{
    res.forEach(element => {
        container.innerHTML +=`<div class="grid-item"> <img src="images/${element.title}" alt="5 Terre" style="width:50%"></div>`
    });

    
   // console.log(res)

}).catch((error)=>{
    console.log("error",error)
})