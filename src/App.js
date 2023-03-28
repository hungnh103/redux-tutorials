import './App.css';
import Note from './components/Note'
import store from './store/store'
import { Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Note />
      </Provider>
    </div>
  );
}

export default App;
