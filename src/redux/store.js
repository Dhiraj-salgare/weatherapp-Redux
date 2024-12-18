import { configureStore } from "@reduxjs/toolkit";


import weatherdata from "./slices/WeatherData"

export const store=configureStore({
    reducer:{
        
        weatherM:weatherdata
    }
})