export default function WeatherDetails({ data }){

    return (
        <article>
            <section>
                <span>{data?.location?.capital}</span>
                <span>, {data?.location?.state}</span>
                <span>- {data?.location?.country}</span>
            </section>

            <section>
                <span>{data?.temperature?.base}°</span>
                <span>{data?.temperature?.info}</span>
            </section>

            <section>
                <span>{data?.temperature?.min}°</span>
                <span>{data?.temperature?.max}°</span>
                <span>{data?.temperature?.feelsLike}</span>
            </section>

            <section>
                <span>Vento</span>
                <span>{data?.temperature?.wind}km/h</span>
                <span>Humidade</span>
                <span>{data?.temperature?.humidity}%</span>
            </section>
        </article>
    )
}