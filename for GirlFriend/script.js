const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const penBtn = document.getElementById("penBtn");
const eraserBtn = document.getElementById("eraserBtn");
const colorPicker = document.getElementById("colorPicker");

let drawing = false;
let mode = "pen"; 
let penColor = "#000000"; // สีปากกาเริ่มต้น (ดำ)

// ปุ่มเปลี่ยนโหมด
penBtn.addEventListener("click", () => {
    mode = "pen";
    penBtn.classList.add("active");
    eraserBtn.classList.remove("active");
});

eraserBtn.addEventListener("click", () => {
    mode = "eraser";
    eraserBtn.classList.add("active");
    penBtn.classList.remove("active");
});

// เปลี่ยนสีปากกา
colorPicker.addEventListener("input", (e) => {
    penColor = e.target.value;
});

// เริ่มวาด
canvas.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath();
});

// หยุดวาด
canvas.addEventListener("mouseup", () => {
    drawing = false;
});

// วาด
canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    ctx.lineWidth = 5;     // ความหนาของเส้น
    ctx.lineCap = "round";  

    if (mode === "pen") {
    ctx.strokeStyle = penColor; 
    } else if (mode === "eraser") {
    ctx.strokeStyle = "white"; 
    ctx.lineWidth = 15; // ขนาดยางลบใหญ่กว่าปากกา
    }

    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
});