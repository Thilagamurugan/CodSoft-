document.body.style.fontFamily = "Arial, sans-serif";
document.body.style.background = "#f4f4f4";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
const calculator = document.createElement("div");
calculator.style.background = "#fff";
calculator.style.padding = "20px";
calculator.style.borderRadius = "12px";
calculator.style.boxShadow = "0 0 15px rgba(0,0,0,0.2)";
calculator.style.width = "260px";
document.body.appendChild(calculator);
const display = document.createElement("input");
display.type = "text";
display.readOnly = true;
display.id = "display";
display.style.width = "100%";
display.style.height = "40px";
display.style.fontSize = "24px";
display.style.marginBottom = "15px";
display.style.padding = "5px";
display.style.textAlign = "right";
calculator.appendChild(display);
const buttons = document.createElement("div");
buttons.style.display = "grid";
buttons.style.gridTemplateColumns = "repeat(4, 1fr)";
buttons.style.gap = "10px";
calculator.appendChild(buttons);
const buttonData = [
  ['7', 'number'], ['8', 'number'], ['9', 'number'], ['/', 'symbol'],
  ['4', 'number'], ['5', 'number'], ['6', 'number'], ['*', 'symbol'],
  ['1', 'number'], ['2', 'number'], ['3', 'number'], ['-', 'symbol'],
  ['C', 'clear'], ['0', 'number'], ['=', 'equal'], ['+', 'symbol'],
];
const styleMap = {
  number: { background: "#2196f3", hover: "#1976d2", color: "white" },
  symbol: { background: "#4caf50", hover: "#388e3c", color: "white" },
  clear: { background: "#f44336", hover: "#d32f2f", color: "white" },
  equal: { background: "#ff9800", hover: "#fb8c00", color: "white" },
};
buttonData.forEach(([text, type]) => {
  const btn = document.createElement("button");
  btn.textContent = text;
  btn.style.padding = "15px";
  btn.style.fontSize = "18px";
  btn.style.border = "none";
  btn.style.borderRadius = "8px";
  btn.style.cursor = "pointer";
  btn.style.transition = "background 0.3s";
  const style = styleMap[type];
  btn.style.backgroundColor = style.background;
  btn.style.color = style.color;
  btn.addEventListener("mouseenter", () => {
    btn.style.backgroundColor = style.hover;
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.backgroundColor = style.background;
  });
  if (type === "clear") {
    btn.addEventListener("click", () => display.value = "");
  } else if (type === "equal") {
    btn.addEventListener("click", () => {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    });
  } else {
    btn.addEventListener("click", () => {
      display.value += text;
    });
  }

  buttons.appendChild(btn);
});

