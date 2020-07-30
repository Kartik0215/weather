const request=require('request'); 
const forecast=(latitude,longitude,callback)=>
{const url="http://api.weatherstack.com/current?access_key=2f57f0921018bceee525127b16ed4362&query="+latitude+","+longitude
request({url: url}, (error,response)=>{
        const data=JSON.parse(response.body);
        if(error){
            callback('unable to connect',undefined)
        }
        else if(data.error){
            callback('unbale to find lovcation',undefined)
        }
        else{
            callback(undefined,{
                temprature:data.current.temperature,
                rain_perc:data.current.precip

            })
        }
    
})
}
module.exports=forecast;