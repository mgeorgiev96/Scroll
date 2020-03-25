let section = document.getElementsByTagName("section")


const slide = (e)=>{
    let target = e.target
    if(target.classList.contains("animate")){
        for(let i=0;i<section.length;i++){
            section[i].classList.add("active")
            setTimeout(()=>{
               section[i].classList.remove("active") 
            },500)
        }
    }
}


window.addEventListener("click",slide)