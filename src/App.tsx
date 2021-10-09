import './App.css'
import './Reset.css'

import Button from './components/button/Button'
import Start from './components/start/Start'
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <section className="container">
       <section className="">
          <h1>The Minimalist Entrepreneur</h1>
          <div className="">
            <div className="total-start">
              <p className="start-number">3.8</p>
              <Start />
            </div>
            <Button/>
          </div>
       </section>
       <hr />
       <section className="reviews">
          <h1>Reviews</h1>
          <div className="">
            <div className="total-start">
              <p className="start-number">3.8</p>
              <Start />
            </div>
            <Button/>
          </div>
       </section>
     </section>
    </div>
  )
}

export default App
