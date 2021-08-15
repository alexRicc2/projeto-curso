import NavBar from "./components/NavBar";
import Central from "./components/Central";
import DescricaoSection from "./components/DescricaoSection";
import Cursos from "./components/Cursos";
import Depoimentos from "./components/Depoimentos";
import FormLogin from "./components/FormLogin";
import Video from "./components/Video";
import Footer from "./components/Footer";
function App() {
  return (
    <div>
    <NavBar></NavBar>
    <Central></Central>
    <DescricaoSection></DescricaoSection>
    <Cursos></Cursos>
    <Depoimentos></Depoimentos>
    <FormLogin></FormLogin> 
    <Video></Video>
    <Footer></Footer> 
    </div>
  );
}

export default App;
