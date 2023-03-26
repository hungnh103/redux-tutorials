import './App.css';
import DataTableContainer from './components/DataTableContainer'
import myStore from './stateManagement/reducer'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <DataTableContainer />
      </div>
    </Provider>
  );
}

export default App;
