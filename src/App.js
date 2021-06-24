import logo from './logo.svg';
// import './App.css';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import Counter from './components/Counter';
import ColorBox from './components/ColorBox';

function App() {

  return (
    <div className="App">
      <TodoFeature />
      {/* <AlbumFeature /> */}
      {/* <Counter />
      <ColorBox /> */}
    </div>
  );
}

export default App;
