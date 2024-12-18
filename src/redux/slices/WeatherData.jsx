import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";


export const firstfetch =createAsyncThunk("firstfetch",async()=>{
    const resp=await fetch("https://api.openweathermap.org/data/2.5/weather?units=metric&q=shirol&appid=ef318150bdbb71ed7a8f00b5c3b48d16")
    return resp.json();
})


export const fetchdata=createAsyncThunk("fetchdata",async(city)=>{
    const response =await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=ef318150bdbb71ed7a8f00b5c3b48d16`)
    return response.json();
})





export const weatherdata=createSlice({

    name:"weatherM",
    initialState:{

        data:null,
        isloading:false
    },

    extraReducers:(builder)=>{
        builder.addCase(fetchdata.pending,(state,actions)=>{
            state.isloading=true
        })

        builder.addCase(fetchdata.fulfilled,(state,actions)=>{
            state.data=actions.payload
            state.isloading=false
        })

        builder.addCase(fetchdata.rejected,(state,actions)=>{
            console.log("error",actions.payload)
        })

        builder.addCase(firstfetch.pending,(state,actions)=>{
            state.isloading=true
        })

        builder.addCase(firstfetch.fulfilled,(state,actions)=>{
            state.data=actions.payload
            state.isloading=false
        })

        builder.addCase(firstfetch.rejected,(state,actions)=>{
            console.log("error",actions.payload)
        })
    }

})



export default weatherdata.reducer