import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { signInAction } from './reducks/users/actions';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state)
  return (

    <div className="App">
      <header className="App-header">
        <button onClick = {() => dispatch(signInAction({uid: "29", username: "niku"}))}>

        </button>
        
      </header>
    </div>
  );
}

export default App;
