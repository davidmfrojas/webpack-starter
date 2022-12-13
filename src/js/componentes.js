//creamos componentes o funciones

//permite cargar el css usando los plugins de css definidos en el package
import '../css/componentes.css';

//importar imagen
import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre = 'Sin nombre') =>{
    console.log('Creando etiqueta h1');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}!!!`;
    document.body.append(h1);

    //Img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);

}