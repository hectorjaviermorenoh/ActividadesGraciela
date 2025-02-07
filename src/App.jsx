// App.jsx
import React from "react";
import "./App.css";
import CorteDeAgua from './components/corteAgua/CorteDeAgua.jsx';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Mi Aplicación en React Vite</h1>
      </header>
      <main className="app-main">
        {/* Aquí irán los componentes dinámicos */}
        <CorteDeAgua />

        <h1>prueba de componentes</h1>
      </main>
      <footer className="app-footer">
        <p>&copy; 2024 - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
