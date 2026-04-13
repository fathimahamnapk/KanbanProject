const addbtn = document.querySelectorAll(".addButton");
const panel = document.getElementById("taskPanel");
const closeBtn = document.getElementById("closeModal");
const addTaskBtn = document.getElementById("addTask");

addbtn.forEach(btn => {
    btn.addEventListener("click",()=>{
        panel.style.display="flex";
        // panel.style.display===flex?none:flex;
    });
});


closeBtn.addEventListener("click",()=>{
    panel.style.display ="none";
})

addTaskBtn.addEventListener("click",()=>{

  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;
  const color = document.getElementById("colorPicker").value;
  const category = document.querySelector(".priority_Select").value;
 

if(title === "" || desc=== ""){
    alert("Fill all fields");
    return;
}

const card = document.createElement("div");
card.classList.add("card");

card.innerHTML = `
    <h4>${title}</h4>
    <p>${desc}</p>
    
`;
card.style.background = color;


const column = document.getElementById(category);
column.appendChild(card);


document.getElementById("title").value = "";
document.getElementById("desc").value ="";

document.getElementById("taskPanel").style.display ="none";

let isDragging = false;
let offsetX, offsetY;

card.addEventListener("mousedown", (e) => {
  isDragging = true;

  // 🧠 store mouse position inside the card
  offsetX = e.clientX - card.offsetLeft;
  offsetY = e.clientY - card.offsetTop;

//   card.style.cursor = "grabbing";
  card.style.position = "absolute";
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
    card.style.left = (e.clientX - offsetX) + "px";
    card.style.top = (e.clientY - offsetY) + "px";
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
  card.style.cursor = "grab";
});

});


