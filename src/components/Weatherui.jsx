
import { useDispatch,useSelector } from "react-redux"

import { useState } from "react";
import { fetchdata } from "../redux/slices/WeatherData";

import clear from '../images/clear.png'
import clouds from'../images/clouds.png'
import drizzle from '../images/drizzle.png'
import  rain from '../images/rain.png'
import mist from '../images/mist.png'
import snow from '../images/snow.png'
import humidity from '../images/humidity.png'
import wind from '../images/wind.png'


function Weatherui(){
    const[input,setinput]=useState('')
    const dispatch=useDispatch()

    const datas =useSelector((state)=>state.weatherM.data)
    console.log(datas)
   
    function onchangehandler(e){
        setinput(e.target.value)
        console.log(input)

    }

    let obj={
        Clouds:clouds,
        Clear:clear,
        Drizzle:drizzle,
        Mist:mist,
        Rain:rain,
        Snow:snow,



    }
    
    return(
        <div className="weather">
            <input type="text" value={input} onChange={onchangehandler}></input>


            <button onClick={()=>dispatch(fetchdata(input))}>Search</button>
            {
                datas?(<div className="subdiv">
                    <div className="pic">
                    <img src={obj[datas.weather[0].main]}></img>
                    </div>
                    <div className="data">
                    <h2>{datas.main.temp}C</h2>
                    <h2>{datas.name}</h2>
                    </div>
                    <div className="sub">
                        <div className="dd1">
                         <img src={humidity}></img>
                         <h3>{datas.main.humidity} humidity</h3>
                        </div>

                        <div className="dd2">
                         <img src={wind}></img>
                         <h3>{datas.wind.speed} m/s <br></br>wind speed</h3>
                         </div>
                        <div>
                        </div>


                    </div>
                </div>):(<p>not found</p>)
            }
            
            

          
            
            
        </div>
    )
}


export default Weatherui