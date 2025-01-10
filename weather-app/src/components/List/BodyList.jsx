export default function BodyList({ weatherList }){

    if(!weatherList) {
        if(!!weatherList.length) return (
            <aside>
                <p>Não previsão de tempo no momento!</p>
            </aside>
        )
    }

    return (
        <aside>
            {
            weatherList?.map(item => (
                
                <article 
                    key={item.location.capital}
                    className='body-list'
                >
                <section
                    className='body-list__item'
                >
                    <span>{item.temperature.min}</span>
                </section>

                <section
                    className='body-list__item' 
                >
                    <span>{item.temperature.max}</span>
                </section>

                <section
                    className='body-list__item'
                >
                    <span>{item.location.capital}</span>
                </section>
                </article>
            ))
            }
      </aside>
    )
}