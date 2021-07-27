// Variables y Constantes

//const nombre = 'Josue';
//const apellido = 'Rodriguez';

//let valorDado = 5;
//valorDado = 4;

//console.log( nombre, apellido, valorDado )

// var No se debe de usar...
//if ( true ) {
    //const nombre = 'Peter';
  //  console.log(nombre)
//}

//console.log( valorDado );



//const nombre   = 'Fernando';
//const apellido = 'Herrera';


// const nombreCompleto = nombre + ' ' + apellido;
//const nombreCompleto = `${ nombre } ${ apellido }`;

//console.log( nombreCompleto );

//function getSaludo(nombre) {
//    return 'Hola ' + nombre;
//}

//console.log( `Este es un texto: ${ getSaludo( nombre ) }  ` );


//const persona = {
//    nombre: 'Tony',
//    apellido: 'Stark',
//    edad: 45,
//    direccion: {
//        ciudad: 'New York',
//        zip: 55321321,
//        lat: 14.3232,
//        lng: 34.9233321
//    }
//};

// console.table( persona );

//const persona2 = { ...persona };
//persona2.nombre = 'Peter';

//console.log( persona );
//console.log( persona2 )


//const arreglo = [1,2,3,4];

// Tarea para usetede estamos 2021 que es ... ay mucho mas 
//let arreglo2 = [ ...arreglo, 5 ];

//const arreglo3 = arreglo2.map( function(numero) {
//    return numero * 2;
//});

//console.log( arreglo );
//console.log( arreglo2 );
//console.log( arreglo3 );


//const saludar2 = ( nombre ) => {
//    return `Hola, ${ nombre }`;
//}
//
//const saludar3 = ( nombre ) => `Hola, ${ nombre }`;
//const saludar4 = () => `Hola Mundo`;
//

//
//console.log( saludar2('Vegeta') );
//console.log( saludar3('Goku') );
//console.log( saludar4() );
//
//
//const getUser = () => ({
//        uid: 'ABC123',
//        username: 'El_Papi1502'
//});
//
//
//const user = getUser();
//console.log(user);

//const persona = {
//    nombre: 'Tony',
//    edad: 45,
//    clave: 'Ironman'
//};

// const { edad, clave, nombre, } = persona;
 
// console.log( nombre );
// console.log( edad );
// console.log( clave );

//const useContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {


    // console.log( nombre, edad, rango );
    
//    return {
//        nombreClave: clave,
//        anios: edad,
//        latlng: {
//            lat: 14.1232,
//            lng: -12.3232
//        }
//    }
//
//}

//const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );
//console.log(nombreClave, anios);
//console.log( lat, lng );
//const personajes = ['Goku','Vegeta','Trunks'];
//const [ , , p3 ] = personajes;
//console.log( p3 );


//const retornaArreglo = () =>{
//    return ['ABC', 123];
//}
//const [ letras, numeros ] = retornaArreglo(); 
//console.log(letras, numeros);


// Tarea
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
//const useState = ( valor ) => {
//    return [ valor, ()=>{ console.log('Hola Mundo') } ];
//}

//const [ nombre, setNombre ] = useState( 'Goku' );

//console.log( nombre );
//setNombre();


//import heroes from '../data/heroes';

// console.log( owners );




//export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

// console.log( getHeroeById(2) );

// find?, filter
//export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

//import { getHeroeById } from './bases/08-imp-exp'

// const promesa = new Promise( (resolve, reject) => {

//     setTimeout( () =>  {

//         const p1 = getHeroeById(2);
//         resolve( p1 );

//     }, 2000 )

// });

// promesa.then( (heroe) => {
//     console.log('heroe', heroe)
// })
// .catch( err => console.warn( err ) );

//const getHeroeByIdAsync = ( id ) => {
//
//    return new Promise( (resolve, reject) => {
//
//        setTimeout( () =>  {

//            const p1 = getHeroeById( id );
//            if ( p1 ) {
//                resolve( p1 );
//            } else {
//                reject( 'No se pudo encontrar el héroe' );
//            }
//        }, 2000 )
//    
//    });
//
//
//}


//getHeroeByIdAsync(1)
    //.then( console.log )
    //.catch( console.warn );



    //const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';

  //  const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
    
//    peticion
       // .then( resp => resp.json() )
        //.then( ({ data }) => {
        //    const { url } = data.images.original;
            
           // const img = document.createElement('img');
           // img.src = url;
           // document.body.append( img );
    
    
       // })
        //.catch( console.warn );    


        //const getImagen = async() => {

          //try {
      
         //     const apiKey = 'C1khQe3Z7R1W2lfTO9myKeuShdqFYSGC';
             // const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
              //const { data } = await resp.json(); 
      
              //const { url } = data.images.original;
      
            //  const img = document.createElement('img');
            //  img.src = url;
            //  document.body.append( img );
      
          //} catch (error) {
              // manejo del error
         //     console.error(error)
       //   }
          
          
          
     // }
      
      // getImagen();

//const activo = true;

// let mensaje = '';

// if ( !activo ) {
//     mensaje = 'Activo';
// } else {
//     mensaje = 'Inactivo';
// }
// const mensaje = ( activo ) ? 'Activo' : 'Inactivo'; 
// const mensaje = ( activo ) ? 'Activo' : null; 
//const mensaje = activo && 'Activo';


//console.log(mensaje);


console.log('Hola')

document.write('<h1>Hola</h1>')
document.write('<h1>Hola</h1>')

// ustedes pueden poner cualquier cosa 