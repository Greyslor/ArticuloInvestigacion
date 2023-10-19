document.getElementById('toggle-mode').addEventListener('click', function() 
{
  document.body.classList.toggle('dark-mode');});

  $btnima.addEventListener("click",(e)=>{
    let $bgimg = document.querySelector("#headerimg");
  });

  console.log("Hola Mundo");

  let $linkGithub = document.querySelector("#link-github");
  console.log($linkGithub);
  
  $linkGithub.href =
    "https://github.com/Greyslor/ArticuloInvestigacion";
  $linkGithub.target = "_blank";
  
  let nombre = "Greys";
  let $nombre = document.querySelector("#nombre");
  
  $nombre.innerHTML = nombre;
  
  //Repaso de AJAX y JSON
  async function obtenerDatos() {
    let respuesta = await fetch("js/data.json");
    let datos = await respuesta.json();
  
    let $info = document.querySelector("#info");
  
    $info.innerHTML = `
      <table border="1">
        <tr>
          <td>Nombre:</td>
          <td>${datos.nombre}</td>
        </tr>
        <tr>
          <td>Edad:</td>
          <td>${datos.edad}</td>
        </tr>
        <tr>
          <td>Es Estudiante:</td>
          <td>${datos.estudiante}</td>
        </tr>
        <tr>
          <td>Materias:</td>
          <td>${datos.materias}</td>
        </tr>
        <tr>
          <td>Correo:</td>
          <td>${datos.contacto.correo}</td>
        </tr>
        <tr>
          <td>Movil:</td>
          <td>${datos.contacto.movil}</td>
        </tr>
      </table>
    `;
  
    console.log(datos);
  }
  
  obtenerDatos();
  
  async function obtenerDatosGitHub() {
    let respuesta = await fetch("https://api.github.com/users/Greyslor");
    let datos = await respuesta.json();
  
    let $github = document.querySelector("#github");
  
    $github.innerHTML = `
      <table border="1">
        <tr>
          <td>Nombre:</td>
          <td>${datos.name}</td>
        </tr>
        <tr>
          <td>Avatar:</td>
          <td><img src="${datos.avatar_url}" alt="${datos.name}"></td>
        </tr>
        <tr>
          <td>Email:</td>
          <td>${datos.email}</td>
        </tr>
        <tr>
          <td>Location:</td>
          <td>${datos.location}</td>
        </tr>
      </table>
    `;
  
    console.log(datos);
  }
  
  obtenerDatosGitHub();