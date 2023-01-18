//let endpoint = "https://randomuser.me/api/";
call("https://randomuser.me/api/")
let btnRef = document.querySelector("button");
btnRef.addEventListener("click",()=>{
    call("https://randomuser.me/api/")
});
function call(endpoint){
    fetch(endpoint).then((response)=>{
        if(response.status === 200){
            return response.json();
        }
        else{
            throw new Error("invalid point");
        }
    }).then((obj)=>{
        console.log(obj.results);
       // let hRef = document.querySelector("h2");
        let pref = document.querySelector("p");
        let Href = document.querySelector("h2");
        pref.innerText = "My name is";
        Href.innerText = obj.results[0].name.first + " " + obj.results[0].name.last;
        let img = document.querySelector("img");
        img.src = obj.results[0].picture.large;
    
        let ulRef = document.querySelector("ul");
        ulRef.addEventListener("mouseover",(obj1)=>{
        // console.log(promise);
        
         if(obj1.target.getAttribute("value") === "0"){
            pref.innerText = "My name is" ;
            Href.innerText =  obj.results[0].name.first + obj.results[0].name.last;
        }
         if(obj1.target.getAttribute("value") === "1"){
             pref.innerText = "My Email address is" ;
             Href.innerText =  obj.results[0].email;
         }
         else if(obj1.target.getAttribute("value") === "2"){
            pref.innerText = "My birthday on " ;
            Href.innerText = new Date(obj.results[0].dob.date).toLocaleDateString();
        }
        else if(obj1.target.getAttribute("value") === "3"){
            pref.innerText = "My address is " ;
            Href.innerText = obj.results[0].location.street.number +" " + obj.results[0].location.street.name;
        }
        else if(obj1.target.getAttribute("value") === "4"){
            pref.innerText = "My phone Number is " ;
            Href.innerText = obj.results[0].cell;
        }
        else if(obj1.target.getAttribute("value") === "5"){
            pref.innerText = "My password is " ;
            Href.innerText = obj.results[0].login.password;
        }
    
    
        
    });
    }).catch((error)=>{
        console.log(error);
    });
}
 

