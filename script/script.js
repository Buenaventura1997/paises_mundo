

//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
    //TODO
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    
 for (let i = 0; i < paises.length; i++) {
 
    const contenedor = document.getElementById("paises");
    const tabla = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let thText = document.createTextNode("Nombre");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Capital");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Idioma");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Moneda");
    th.appendChild(thText);
    tr.appendChild(th);
 
    tabla.appendChild(tr);
 
    tr = document.createElement("tr");
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].nombre);
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].capital);
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].idioma_oficial);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].idioma_oficial);
    td.appendChild(tdText);
    tr.appendChild(td);

     
    tabla.appendChild(tr);

   
    tr = document.createElement("tr");
    var img = document.createElement('img'); 
    img.src = paises[i].bandera; 
    document.body.appendChild(img);

    tabla.appendChild(tr);

    contenedor.appendChild(tabla);
    tabla.setAttribute("border", "1");
  

}


}
     
 


//funcion que permite agregar un pais al arreglo 

 
 function agregarPais(){
    let contador = 0;
     if(contador===0){
        let pais =  prompt("Ingrese el Pais");
        let capital =   prompt("Ingrese la Capital");
        let idioma =   prompt("Ingrese el Idioma");
        let moneda =   prompt("Ingrese la moneda");
        let bandera_img = prompt("Ingrese el link de la Bandera");
       
        let nuevo_objeto = {
           nombre: pais,
           bandera: bandera_img,
           capital: capital,
           idioma_oficial: idioma,
           moneda: moneda
        }
        const ingreso = paises.unshift(nuevo_objeto); 
        contador=1;
     }
     else{
        const contenedor = document.getElementById("paises");
    const tabla = document.createElement("table");
    let tr = document.createElement("tr");
    let th = document.createElement("th");
    let thText = document.createTextNode("Nombre");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Capital");
    th.appendChild(thText);
    tr.appendChild(th);
 
    th = document.createElement("th");
    thText = document.createTextNode("Idioma");
    th.appendChild(thText);
    tr.appendChild(th);

    th = document.createElement("th");
    thText = document.createTextNode("Moneda");
    th.appendChild(thText);
    tr.appendChild(th);
 
    tabla.appendChild(tr);
 
    tr = document.createElement("tr");
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].nombre);
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].capital);
    td.appendChild(tdText);
    tr.appendChild(td);
 
    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].idioma_oficial);
    td.appendChild(tdText);
    tr.appendChild(td);

    td = document.createElement("td");
    tdText = document.createTextNode(paises[i].idioma_oficial);
    td.appendChild(tdText);
    tr.appendChild(td);

     
    tabla.appendChild(tr);

   
    tr = document.createElement("tr");
    var img = document.createElement('img'); 
    img.src = paises[i].bandera; 
    document.body.appendChild(img);

    tabla.appendChild(tr);

    contenedor.appendChild(tabla);
    tabla.setAttribute("border", "1");
   contador=0;

}
        
     }
 



