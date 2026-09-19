import './App.css'

function App() {
  return (
    <div className="pagina">
      <header className="encabezado">
        <h1>¡Hola! Soy Aylith Valeria</h1>
        <p>Bienvenidos a mi página personal creada con React</p>
      </header>

      <main className="contenido">
        <section className="tarjeta">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
            alt="Computador portátil en un espacio de trabajo"
            className="imagen"
          />

          <h2>Conociendo React</h2>

          <p>
            Soy estudiante de Ingeniería de Sistemas y estoy aprendiendo
            a desarrollar aplicaciones web utilizando React.
            Este proyecto me permite poner en práctica mis conocimientos
            de componentes, JSX y estilos CSS.
          </p>

          <h3>Sobre mi proyecto</h3>

          <p>
            Mi objetivo es crear interfaces atractivas, organizadas
            e interactivas, mientras continúo fortaleciendo mis
            habilidades en el desarrollo web.
          </p>

          <div className="etiquetas">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <button onClick={() => alert('¡Gracias por visitar mi página!')}>
            ¡Conoce mi proyecto!
          </button>
        </section>
      </main>

      <footer className="pie">
        <p>Proyecto académico | Conociendo React | 2026</p>
      </footer>
    </div>
  )
}

export default App