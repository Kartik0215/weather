const request=require("request")
const geocoding=(address,callback)=>{
    const url="https://api.mapbox.com/geocoding/v5/mapbox.places/" + address +".json?access_token=pk.eyJ1Ijoia2FydGlrMjAwMCIsImEiOiJjazl1ZXptNHcwMTMwM21sNnA1N3FxMzRyIn0.nMRtlOBBt4j7XOSVEWY68Q&limit=1"
    request({url:url},(error,response)=>{
        const data1=JSON.parse(response.body);
        if(error){
            callback('unable to connect',undefined );
        }
        else if(data1.message){
            callback('unable to fina location',undefined)
        }
        else{
            callback(undefined,{
                latitude:data1.features[0].center[1],
                longitude:data1.features[0].center[0],
            })
        }
})
}
module.exports=geocoding;