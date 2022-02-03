import Counter from './components/Counter';
import Form from './components/Form';
import  './components/style.css'


function App() {
  return (
    <div className="App">
    <Form formStyle="inputbox"></Form>
    <Counter initialValue={5} increment={1} newStyle="counterInput"></Counter>
    <Counter increment={0} newStyle="counterInput"></Counter>
    <Counter initialValue={100} newStyle="counterInput"></Counter>
    </div>
  );
}

export default App;
