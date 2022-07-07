import './App.scss';
import {NavLink,useRoutes} from 'react-router-dom'
import routes from './router'
import Editor from './components/editor'


function App() {
  const element = useRoutes(routes)

  return (
    <div className="App">
    {/* <Editor/> */}
     {/* <div>
      <NavLink className="list-group-item" to="/count">count</NavLink>
				<NavLink className="list-group-item" to="/person">person</NavLink>
     </div>*/}

     <div>{element}</div> 
    </div>
  );
}

export default App;
