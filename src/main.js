import { getCityID, getCityForecastById } from './utils/requests';

export default async function getForecast(cityName) {

    try {
        const cityId = await getCityID(cityName);
        const cityForecast = await getCityForecastById(cityName);
        
        console.log(`
        Clima em: ${cityForecast.name}, ${cityForecast.state}
        Temperatura: ${cityForecast.temperature}º
        Direção do vento: ${cityForecast.wind_direction}
        Velocidade do vento ${cityForecast.wind_velocity} km/h
        Humanidade: ${cityForecast.humidity}%
        Condição: ${cityForecast.condition}
        Pressão atmosférica: ${cityForecast.pressure}
        Sensação: ${cityForecast.sensation}º
        `)
    } catch (erro) {
        console.log(erro);
    }
}