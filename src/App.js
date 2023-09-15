import './App.css';
import LifecycleExample from './LifecycleExample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <LifecycleExample data1={10} />
    </div>
  );
}

// function myApp() {
//   return (
//     <div className='hSpin'>
//       <h1>Hello</h1>
//     </div>
//   );
// };

export default App;
