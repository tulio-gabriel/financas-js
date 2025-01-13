let entrada;
let saida;
let total;
let listaitems =[];
let camp = document.getElementById("tabl");
let displayentrada = document.getElementById("entradasp");
let displaysaida = document.getElementById("saidasp");
let displaytotal = document.getElementById("totalsp");

function init(){
    entrada=0
    saida=0
    total=0
    let bt=document.getElementById("butao")
    bt.addEventListener("click", add)
}

init()

function add() {
  let val = parseFloat(document.getElementById("value").value);
  let desc = document.getElementById("descrip").value;
  let radi = document.querySelector('input[name="rad"]:checked').value;
  if (radi == "entrada") {
    entrada += val;
  }
  if (radi == "saida") {
    saida += val;
  }
  total= entrada - saida;
  displayentrada.innerHTML ="R$"+ entrada;
  displaysaida.innerHTML ="R$"+ saida;
  displaytotal.innerHTML ="R$"+ total;
  listaitems.push( `<tr> <td>${desc}</td> <td>R$ ${val}</td>  <td>${radi}</td>  <td> <button class='del'>Delete</button></td> </tr>`)
  camp.innerHTML = listaitems;
  document.querySelectorAll('.del').forEach((button, index) => {
    button.addEventListener('click', () => del(index));
  });
}


function del(index){
  const item = listaitems[index];
  const valueMatch = item.match(/R\$ (\d+(\.\d+)?)/);
  const typeMatch = item.match(/<td>(entrada|saida)<\/td>/);
  
  if (valueMatch && typeMatch) {
    const val = parseFloat(valueMatch[1]);
    const radi = typeMatch[1];
    
    if (radi == "entrada") {
      entrada -= val;
      total -= val;
    }
    if (radi == "saida") {
      saida -= val;
      total += val;
    }
  displayentrada.innerHTML = "R$" + entrada;
  displaysaida.innerHTML = "R$" + saida;
  displaytotal.innerHTML = "R$" + total;
  listaitems.splice(index, 1);
  camp.innerHTML = listaitems.join('');
  document.querySelectorAll('.del').forEach((button, index) => {
    button.addEventListener('click', () => del(index));
  });
}
}