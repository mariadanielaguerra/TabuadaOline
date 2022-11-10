const btn = document.getElementById("btn");
const tabs = document.getElementById("seltab");

btn.addEventListener("click", () => {
  if (document.getElementById("entrada").value.length < 1) {
    alert("por favor, insira algum número");
  } else {
    tabs.innerHTML = "";
    document.getElementById("res").style.display = "block";
    var n = document.getElementById("entrada").value;
    for (c = 1; c <= 100; c++) {
      var resul = parseInt(n * c);
      var tab = document.createElement("option");
      var item = `${n} X ${c} = ${resul}`;
      tab.appendChild(document.createTextNode(item));
      tabs.appendChild(tab);
    }
  }
});