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
                    style={{ display: 'flex', justifyContent: 'space-between', gap: '5rem' }}
                >
                <section style={{ width: '33px' }}>
                    <span>{item.temperature.min}</span>
                </section>

                <section style={{ width: '33px' }}>
                    <span>{item.temperature.max}</span>
                </section>

                <section style={{ width: '115px' }}>
                    <span>{item.location.capital}</span>
                </section>
                </article>
            ))
            }
      </aside>
    )
}