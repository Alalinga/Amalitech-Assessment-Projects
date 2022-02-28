

const userPassword = document.getElementById("password")
const userEmail = document.getElementById("email")
const form = document.querySelector("#loginform")

form.addEventListener('submit',(event)=>{
    event.preventDefault()
   if(form.elements['email'].value){
   return login(form.elements['email'].value,form.elements['password'].value)
   }else{
       return console.log("error")
   }
})
const login = (email,password)=>{
   let data = {email:email,password: password}
    fetch("/api/login",{method:"POST",body: JSON.stringify(data),headers:{ "Content-Type":"application/json"}})
    .then((response)=>{
        if(response.ok){
           return  response.json() // console.log("right")   //location.assign('index.html')
        }else{
            return  console.log("No responce")
        }
        
    }).then(res=>{
          return console.log(res)
    })
    
    .catch(err=>{
        console.log(err.message)
    })
}