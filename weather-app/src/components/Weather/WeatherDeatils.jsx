export default function WeatherDetails({ data }){

    return (
        <article className='weather-details'>
            <section className='weather-details__section location'>
                <span className='details-section__item_capital'>{data?.location?.capital}</span>
                <span className='details-section__item_state'>, {data?.location?.state}</span>
                <span className='details-section__item_country'>- {data?.location?.country}</span>
            </section>

            <section className='weather-details__section temperature'>
                <img src={data?.temperature?.icon} alt="" />
                <span className='details-section__item_temperature -base'>
                    {data?.temperature?.base}°
                </span>
                <span className='details-section__item_temperature -info'>
                    {data?.temperature?.info}
                </span>
            </section>

            <section className='weather-details__section temperature'>
                <span className='details-section__item_temperature -min'>
                    <i></i>
                    <b>{data?.temperature?.min}°</b>
                </span>
                <span className='details-section__item_temperature -max'>
                    <i></i>
                    <b>{data?.temperature?.max}°</b> 
                </span>
                <span className='details-section__item_temperature'>
                    Sensação: <b>{data?.temperature?.feelsLike}</b>
                </span>
            </section>

            <section className='weather-details__section temperature'>
                <span className='details-section__item_temperature -wind'>
                    Vento:  
                    <b>{data?.temperature?.wind}km/h</b>
                </span>
                <span className='details-section__item_temperature'>Humidade</span>
                <span className='details-section__item_temperature -humidity '>{data?.temperature?.humidity}%</span>
            </section>
        </article>
    )
}