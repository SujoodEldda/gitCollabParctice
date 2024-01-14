class DBManager{
    connectToDB(){
        mongoose.connect("mongodb://127.0.0.1:27017/weather_DB")
        .catch((err)=> console.log(err))
    }
    getData(){
        const cities = await Weather.find({})
        return cities
    }
}