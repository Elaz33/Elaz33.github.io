import React, { Component } from 'react';
import './weather.css';
import Clock from './Clock';
export class GetWeather extends Component {
state = {
    //snow:null
// weather:""
place:"",
weather:"",
realFeel:"",
sunset:'',
sunrise:'',
city:'',
state:'',
name:''
}
    
    cityStateEntered = e => {
        //console.log(e);
        this.getWeatherData(e.target.value);
    };
        async getWeatherData(city,state){
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '03bdc3d839msh6913f5134c7283fp170902jsnb793ea29f676',
                    'X-RapidAPI-Host': 'aerisweather1.p.rapidapi.com'
                }
            };
            try{
                const response = await fetch(`https://aerisweather1.p.rapidapi.com/observations/${city},${state}`, options)
                const data = await response.json()
                console.log(data);
                this.setState({
                    sunset: new Date(data.response.ob.sunset * 1000).toLocaleTimeString(),
                    sunrise: new Date(data.response.ob.sunrise * 1000).toLocaleTimeString()
                       // .toLocaleString()
              
                })
               
                this.setState({ city:data.response.place.city,state:data.response.place.state,time:data.response.obDateTime, weather: 
                data.response.ob.tempF, realFeel: data.response.ob.feelslikeF })
                console.log(data);  
              
            }
          
            catch(e){
                console.error(e)
            }
            console.log(this.state.place);
        };
    handleChange = e => {
      const target =e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
       const name =target.name
        this.setState({
            [name]:value
        })
    }
      
    render() {
        console.log(this.state)
        return (
           <div>
                {/* <h2>   Cleveland Ohio</h2> */}
                
              <input name='name' 
              defaultValue={this.state.city}placeholder='enter a city in the USA' onChange={this.handleChange} onBlur={this.cityStateEntered}></input>
              
                
                <br/>
                {/* {this.state.weather.weather} */}
                <h3> City: {this.state.city}</h3> 
                <br />
                <h3> State: {this.state.state}</h3>
                <br />
                {/* <h3> Time: {this.state.time}</h3> */}
                <br />
                <h3> Degrees:  {this.state.weather}</h3>
                <br />
                <h3> Real Feel: {this.state.realFeel}</h3>
                <br />
                <h3> Neitz: {this.state.sunrise}</h3>
                <br />
                <h3> Shkia: {this.state.sunset}</h3>
                <br />
                <Clock />
            </div>
        )
    };
}
