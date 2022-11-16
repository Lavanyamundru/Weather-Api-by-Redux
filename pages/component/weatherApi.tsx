import axios from "axios";
export const getWeatherData = async (value: string, setWeatherDetails: any) => {
  try {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=d987b512cd513f5d8f09ad2a29104ce7`
    );
    if (res?.data) {
      console.log("weather data", res.data);
      setWeatherDetails(res.data);
    } else {
      setWeatherDetails(null);
    }
  } catch (e) {
    setWeatherDetails(null);
    alert("please enter Correct City Name!");
  }
};
