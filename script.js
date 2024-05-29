const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("listContainer")

function Add(){
    if(inputBox === ""){
        alert("Enter Your Task First")
    }else{
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        const remove = document.createElement("span")
        remove.innerHTML = "x"
        li.appendChild(remove)
    }
    inputBox.value = ""
}
listContainer.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("click")
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
    }
})