import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <h1>Bookstore.Q</h1>
        <nav>
          <li>Inicio</li>
          <li>Contactanos</li>
          <li>Mi carrito</li>
        </nav>
        <input type='text' placeholder='Busca un libro'></input>
        <button type='submit'>BUSCAR</button>
      </header>
      <hr></hr>
      <main>
        <h2>Todos los libros que buscas en una sola página</h2>
        <h3>Bookstore Quilmes</h3>
      </main>
      <hr></hr>
      <footer>
        <p>Todos los derechos reservados - 2021 </p>
        <p>Diseñado por Lucila Coniglio</p>
      </footer>
    </div>
  );
}

export default App;
