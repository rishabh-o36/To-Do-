const writingArea = document.getElementById("writingArea");
const tasks = document.getElementById("tasks");

function addingTask()
{
    if(writingArea.value == '')
        alert("Please write something to add task...")
    else
    {
        let li=document.createElement("li");
        li.innerHTML=writingArea.value;
        tasks.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    writingArea.value='';
    saveData();
}
tasks.addEventListener("click",function(e)
{
    if(e.target.tagName=="LI")
        e.target.classList.toggle("checked");
    else if(e.target.tagName=="SPAN")
        e.target.parentElement.remove();
    saveData();
},false);

function saveData()
{
    localStorage.setItem("data",tasks.innerHTML);
}

function showData()
{
    tasks.innerHTML=localStorage.getItem("data");
}
showData();