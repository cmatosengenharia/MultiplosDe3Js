function calcularSoma() {
  var numero = document.getElementById("numeroInformado").value;
  var soma = 0;
  debugger;
  for (var i = numero - 1; i >= 0; i--) {
    if (i % 3 == 0 || i % 5 == 0) {
      soma += i;
    }
  }
  document.getElementById("resultadoDaSoma").value = soma;
}