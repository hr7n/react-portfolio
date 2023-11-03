import Header from './components/Header';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <>
      <header>
        {' '}
        <Header />{' '}
      </header>
      {/* <Nav />
      <Header /> */}
      <div></div>
      <h1>React Portfolio</h1>
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Michael Horton
        </button> */}
      </div>
    </>
  );
}

export default App;
