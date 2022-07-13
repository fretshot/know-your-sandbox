document.querySelector('.contenido-pagina').remove();
console.log("Hello World")

let div = document.createElement("div"); 
div.innerText="This is sempiternal";
div.style.cssText = 'width:100%; height:50px; background-color:red; text-align:center; font-size:18px; color:white;';
document.body.insertBefore(div, document.body.firstChild);
