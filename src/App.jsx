import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import { Flex } from '@chakra-ui/react';
import './App.css';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      {/* <Nav />
      <Header /> */}
      <div></div>
      {/* <h1>React Portfolio</h1> */}
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          Michael Horton
        </button> */}
      </div>
    </>
  );
}

export default App;
