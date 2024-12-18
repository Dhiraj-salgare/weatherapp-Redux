import logo from './logo.svg';
import './App.css';
import Weatherui from './components/Weatherui'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { firstfetch } from './redux/slices/WeatherData';

function App() {

  const dispatch=useDispatch()

   useEffect(()=>{
       dispatch(firstfetch())
   },[])
 
  return (
    <div className="App">
      <Weatherui></Weatherui>
      
    </div>
  );
}

export default App;
