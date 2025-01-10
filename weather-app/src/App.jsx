import { 
  useEffect, 
  useState, 
} from 'react'

import './App.css'

import { 
  brazilStates, 
} from './data'

import {
  Layout,
} from './layout'

import { 
  Header, 
  List,
  Card, 
} from './components'

function App() {

  const {
    VITE_API_KEY, 
    VITE_API_BASE_URL, 
  } = import.meta.env

  const [weather, setWeather] =  useState([])
  const [filterWeather, setFilterWeather] = useState([])

  useEffect(() => {
      
    (async function(){

      try {
        const promiseList = await Promise
        .allSettled(Object.values(brazilStates)
        .map(capital => 
          fetch(`${VITE_API_BASE_URL}/current.json?key=${VITE_API_KEY}&q=${capital}`)
        ))

        const promiseResolvedList = promiseList
          .filter(promise => promise.status === 'fulfilled')
          .map(promise => promise.value.json())

        const responseList = await Promise.all(promiseResolvedList)
    
        const data = responseList.map(response => ({
          location: {
            country: response.location.country,
            state: response.location.region,
            capital: response.location.name,
          },
          temperature: {
            info: response.current.condition.text,
            icon: response.current.condition.icon,
            base: response.current.temp_c,
            min: response.current.dewpoint_c,
            max: response.current.heatindex_c,
          }
        }))

        setWeather(data)

      } catch (error) {
        //console.log('=> error:', error)
      }

    }())
  }, [])

  function handleSearch(event) {
    const value = event.target.value
    const wheatherData = weather
      .filter(item => 
        item.location.capital.toLowerCase()
        .includes(value.toLowerCase())
      )
    setFilterWeather(wheatherData)
  }
  
  return (
    <div className='wrap'>

      <Layout.Header>

        <Header.Title title='Previsão do Tempo' />
        <Header.Search onSearch={handleSearch} />

        <Card.Container>
          <Card.Body>
            Content Card...
          </Card.Body>
        </Card.Container>

      </Layout.Header>
    
      <Layout.Content>

        <header>
          <h3 className='heading'>Capitais</h3>
        </header>

        <aside className='bl-content'>
          <List.Header columnList={['Min', 'Max', 'Cidade']} />
          {
            (weather && !!weather.length) && 
              <List.Body 
                weatherList={
                  filterWeather && !!filterWeather.length ? 
                  filterWeather :  
                  weather
                } 
              />
          }
        </aside>

      </Layout.Content>
    </div>
  )
}

export default App
