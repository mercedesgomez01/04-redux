import { createStore } from 'redux'
import reducer from '../redux/reducers/root-reducer'
export default createStore(
  reducer, /* preloadedState, */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
