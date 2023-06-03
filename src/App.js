import './App.css';
import HomeScreen from './component/HomeScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='wrapper'>
          <h1>Flashcards</h1>
        </div>
      </header>

      <main>
        <HomeScreen />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
