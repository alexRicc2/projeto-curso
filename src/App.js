import Home from './pages/Home';
import Cursos from './components/Cursos';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/cursos" component={Cursos}/>
    </div>
  );
}

export default App;
