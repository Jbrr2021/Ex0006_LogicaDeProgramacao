function verificarTemperatura() {
  var temperatura = parseFloat(document.getElementById("temperatura").value);

  if (isNaN(temperatura)) {
    alert("Por favor, digite uma temperatura válida.");
    return;
  }

  if (temperatura > 38) {
    alert("Você está com febre");
  } else {
    alert("Nada de febre");
  }
}
