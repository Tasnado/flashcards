import './App.css';
import HomeScreen from './component/HomeScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Flashcards</p>
      </header>

      <main>
        <HomeScreen />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
