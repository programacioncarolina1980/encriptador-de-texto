const inputText = document.querySelector(".text-input");
const outputText = document.querySelector(".div-mensaje");
const btnEncriptar = document.querySelector(".btn-encriptar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");
const btnCopiar = document.querySelector(".btn-copiar");

// Función para encriptar un texto
function encriptar() {
  let textoOriginal = inputText.value;

  const matriz_code = [
    ["e", "enter"],
    ["i", "ines"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matriz_code.length; i++) {
    let regex = new RegExp(matriz_code[i][0], "gi"); 
    textoOriginal = textoOriginal.replace(regex, matriz_code[i][1]);
  }

  outputText.value = textoOriginal;
}

// Funcion para desencriptar un texto
function desencriptar() {
  let textoEncriptado = inputText.value;

  const matriz_code = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];

  for (let i = 0; i < matriz_code.length; i++) {
    let regex = new RegExp(matriz_code[i][1], "g");
    textoEncriptado = textoEncriptado.replace(regex, matriz_code[i][0]);
  }

  outputText.value = textoEncriptado;
}

// Función para copiar un texto
function copiarTexto() {
  outputText.select();
  document.execCommand("copy");
}

// botones
btnEncriptar.addEventListener("click", encriptar);
btnDesencriptar.addEventListener("click", desencriptar);
btnCopiar.addEventListener("click", copiarTexto);
