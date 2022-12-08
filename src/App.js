import './App.css';
import { MainCalculator } from './components/Calculator';
import { Ui } from './components/MainCalculator';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="App">
      <Ui></Ui>
      <MainCalculator> </MainCalculator>
    </div>
  );
}

export default App;
