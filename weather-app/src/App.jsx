import { useEffect } from 'react'
import './App.css'

import { brazilStates } from './data'

function App() {

  const {
    VITE_API_KEY, 
    VITE_API_BASE_URL, 
  } = import.meta.env

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
        console.log(responseList)

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
