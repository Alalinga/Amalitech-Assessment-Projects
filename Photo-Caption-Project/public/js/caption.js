
const container = document.querySelector("#container")
//console.log(process.cwd)
container.innerHTML ='';
fetch('/api/captions').then(res=>{
    if(res.ok){
        return res.json();
    }
}).then(res=>{
    res.forEach(element => {
        container.innerHTML +=`<div class="grid-item"> <img src="images/${element.photo.title}" alt="5 Terre" style="width:50%"> <p>Description:${element.description}</p><p>User:${element.user_account.username}</p> </div>`
    });

    
    console.log(res)

}).catch(error=>{
      console.log(error)
})