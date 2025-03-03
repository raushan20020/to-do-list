let input =  document.getElementById("inputbox");
let list = document.getElementById('listContainer');

function addTask(){
  if(input.value === ''){
    alert("Please Enter SomeThing!");
  } 
  
// js functionality to add items 

  else{
    let li = document.createElement("li");
    li.innerText= input.value
    list.appendChild(li);

// new span tag to insert cross icon

    let span = document.createElement("span");  
    span.innerText='\u00d7';
    li.appendChild(span);
    
  }
  input.value='';
  saveData();
}

// Fun
input.addEventListener("keydown",function(e){
  if(e.key == 'Enter')
    addTask();
})


// capturing the click event to perform checked and deleted 
list.addEventListener("click", function(e){
  if(e.target.tagName=='LI'){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName=='SPAN'){
    e.target.parentElement.remove();
  }
}, false)

//function to save the data on our browser

function saveData(){
  localStorage.setItem('data', list.innerHTML);
}

//function show task is created to show the data when we refresh the browser

function showTask(){
  list.innerHTML=localStorage.getItem('data');
}
showTask();