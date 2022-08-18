import logo from './logo.svg';
import './App.css';

function App() {
  let imagen ="hamburguesa.png";
  let titulo = "Doble cuarto de libra";
  let calorias = "771kcal";
  let descripcion = "Imaginá la sensación del clásico Cuarto de Libra. Imaginalo con un medallón de deliciosa carne 100% vacuna, queso cheddar, cebolla, kétchup y mostaza ¿Listo? Ahora duplicá esa sensación. Ya tenés el Doble Cuarto en la cabeza.";
  const producto ={ id:1 , image:imagen , calories:calorias, title:titulo , description:descripcion }
  
  
  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='col-md-4 offset-md-2'>
          <img src={producto.image} alt={producto.title} className='img-fluid'/>
        </div>
        <div className='col-md-4'>
          <h1 className='text-center'>{producto.title}</h1>
          <p>{producto.calories}</p>
          <p className='text-center'>{producto.description}</p>
        </div>
      </div>

    </div>

  );
}

export default App;
