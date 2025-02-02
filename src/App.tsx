import { Provider } from 'react-redux';
import { store } from './store/store';

import Home from '@components/Home';

import './App.css';

function App() {
    return (
        <Provider store={store}>
            <Home />
        </Provider>
    );
}

export default App;
