import './style.css'
import bw from './assets/BW.jpeg'
import ls from './assets/LS.jpeg'
import mh from './assets/MH.jpg'
import lotr from './assets/Lord of the Rings.jpg'
import up from './assets/up.jpg'
import flash from './assets/flash.jpg'
import legend from './assets/the legends.jpg'
import wood from './assets/wood.jpg'

function App() {
  return (
    <div className="page" id="home">
      <div className="container">
        <header>
          <h2>METFLIX</h2>
          <nav>
            <a href="#home">Home</a>
            <a href="#movies">Movies</a>
            <a href="#my-list">My List</a>
          </nav>
        </header>

        <h1 id="my-list">My List</h1>

        <div className="movies" id="movies">
          <div className="movie">
            <img src={bw} alt="Black Widow" />
            <p>Black Widow</p>
          </div>
          <div className="movie">
            <img src={ls} alt="Love Story" />
            <p>Love Story</p>
          </div>
          <div className="movie">
            <img src={mh} alt="Monster House" />
            <p>Monster House</p>
          </div>
          <div className="movie">
            <img src={lotr} alt="The Lord of the Rings" />
            <p>The Lord of the Rings</p>
          </div>
          <div className="movie">
            <img src={up} alt="Up" />
            <p>Up</p>
          </div>
          <div className="movie">
            <img src={flash} alt="The Flash" />
            <p>The Flash</p>
          </div>
          <div className="movie">
            <img src={legend} alt="The Legend" />
            <p>The Legend</p>
          </div>
          <div className="movie">
            <img src={wood} alt="Wood" />
            <p>Wood</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
