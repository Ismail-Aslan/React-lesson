// import logo from './logo.svg';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionalComponent from './components/FunctionalComponent';


function App() {
  return (
    <div className="App">
        <h1>Ismail ASLAN</h1>
        <ClassComponent y="Class Component PROPS"/>
        <FunctionalComponent x="Functional Component PROPS" />
    </div>
  );
}

export default App;
