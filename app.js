const request=require("request")
const geocoding=require("./utils/geocoding")
const weather=require("./utils/forecast")



geocoding("alwar",(error,dataShow)=>{
    console.log(error);
    console.log(dataShow);
    forecast(dataShow.latitude,dataShow.latitude,(error,temp)=>{
        console.log(temp);
    })

})