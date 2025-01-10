import { 
  useEffect, 
  useState, 
} from 'react'

import './App.css'

import { 
  brazilStates, 
} from './data'

function App() {

  const {
    VITE_API_KEY, 
    VITE_API_BASE_URL, 
  } = import.meta.env

  const [weather, setWeather] =  useState([])

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
            state: response.location.region,
            capital: response.location.name,
          },
          temperature: {
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
  
  return (
    <>
      <h3>Weather App</h3>
    </>
  )
}

export default App
