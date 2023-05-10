import "./App.css";
import { useParams, Routes, Route, Link } from "react-router-dom";


// Por temas de conveniencia no importé los componentes
const Home = () => {
  return (
    <div>
      <h1>Bienvenido!</h1>
      <Link to={"/home"}></Link>
    </div>
  );
};
const RandomNumber = () => {
  return (
    <div>
      <h1>4</h1>
      <Link to={"/4"}></Link>
    </div>
  )
}
const Saludo = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <Link to={"/hello"}></Link>
    </div>
  )
}
const Hi = () => {
  const { Hello } = useParams();
  return (
    <div style={{backgroundColor:'red', height:'100px'}}>
      <h1 style={{color:'blue'}}>Hello!{Hello}</h1>
      <Link to={"/hello/blue/red"}></Link>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/4" element={<RandomNumber />} />
        <Route path="/hello" element={<Saludo />} />
        <Route path="/hello/blue/red" element={<Hi />} />
      </Routes>
    </div>
  );
}

export default App;
