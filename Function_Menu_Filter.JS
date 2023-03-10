const content=["MY Name is Vandit","Age : 19","Skill: front-end web developer"];
const options= document.querySelectorAll(".option");
const text=document.getElementById("para");



options.forEach((btn)=>{
    const index=btn.dataset.num;
    if(btn.classList.contains("ON"))
    {

        text.innerText=content[index];
    }
   
   
    btn.addEventListener("click",(element)=>{
const x=element.target;
const y=element.target.dataset.num;
        if(!x.classList.contains("ON"))
        {
        options.forEach((choice)=>{
    
        choice.classList.remove("ON")
                })
x.classList.add("ON");
}
text.innerText=content[y];

})
})

// ⭐Notes
// --> x.classList.contains
