import './App.scss';
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './router'
import Editor from './components/editor'


function App() {
  const element = useRoutes(routes)

  return (
    <div className="App">
     <div>{element}</div> 
    </div>
  );
}

export default App;
