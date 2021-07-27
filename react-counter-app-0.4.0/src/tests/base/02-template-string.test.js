import '@testing-library/jest-dom';

import { getSaludo } from "../../base/02-template-string";

describe(' Pruebas 02-template-string.test ', () => {
    
        test( ' prueba en el metodo ¡getSaludo! ', () => {
            
            const Nombre = 'Josue';

            const Saludos  = getSaludo( Nombre );

            expect( Saludos ).toBe( 'Hola ' + Nombre + '!' )

        })





});