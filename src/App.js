import Home from './pages/Home';
import PlanosPage from './pages/PlanosPage';
import Cadastro from './pages/Cadastro';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/planos" component={PlanosPage}/>
      <Route exact path="/cadastro" component={Cadastro}/>
    </div>
  );
}

export default App;
