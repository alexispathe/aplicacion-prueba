import 'bootstrap/dist/css/bootstrap.min.css';
import { componentPaths } from './routes/componentPaths';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Header } from './components/Header';
import { VideosProvider } from './contexts/VideosProvider'; //ESTAMOS IMPORANTO EL CONTEXTO PARA VIDEOS
function App() {


  return (
      <VideosProvider>
        <div className="App">

        <BrowserRouter>
        <Header/>
          <Routes>
            {componentPaths.map((component, i)=>(
              <Route element={component.element} path={component.path} key={i}/>
            ))}
          </Routes>
        </BrowserRouter>
    </div>

      </VideosProvider>

  )
}

export default App
