import JosueGuapo from './Componentes/Josue';

function App() {
 
      const MisDatosPersonales = {
         Nombre:'Josue',
         edad: 15
      }

  return (
    <div className="App">
        <JosueGuapo Josue='JosueGuapo Bello Hermoso '/>
        <JosueGuapo Apellido='ALomi' />
        <p>{MisDatosPersonales.edad}</p>
   </div>
  );

}


export default App;

