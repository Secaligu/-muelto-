const botonempezar = documet.getElementById("botoniniciar")
const  contenedorletra= document.getElementById("contenedorletra")
const letraingresada= document.getElementById("inputletra")
const imgahorcado = document.getElementById("imgahorcado")

const inicializarjuego= () =>{
    const palabrasadininar= ["one piece","blue lock","dragonballz","invencible"]
    const palabraA= palabrasadininar [Math.floor(Math.random * palabrasadininar.length)]

    let palabraOculta= palabraA.split('')
    let letrasAdivinadas = palabraOculta.map(()=> "_")
    let intentosrestantes = 6 
    let letrasincorrectas = []

    const objetodeljuego = {
        palabraOculta: palabraOculta,
        letrasAdivinadas: letrasAdivinadas,
        intentosrestantes: intentosrestantes,
        letrasincorrectas: letrasAdivinadas,
    }

    return objetodeljuego
}

const imgsahorcado= (errores)=> {
    const rutaImagenes ={
        5: '02.jpeg',
        4: '03.jpeg',
        3: '04.jpeg',
        2: '05.jpeg',
        1: '06.jpeg',
        0: '07.jpeg'
    }
    if(rutaImagenes.hasOwnProperty(errores)){
        imgahorcado.scr = `./img-ahorcado-main`
    }
}
