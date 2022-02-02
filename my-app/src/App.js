import Counter from './components/Counter';
import Form from './components/Form';
import  './components/style.css'


function App() {
  return (
    <div className="App">
    <Form formStyle="inputbox"></Form>
    <Counter initialValue={5} increment={1}></Counter>
    <Counter increment={0}></Counter>
    <Counter initialValue={100}></Counter>
    </div>
  );
}

export default App;
