import React from 'react'
import { Intro } from '../intro/Intro'
import { Modern } from '../modern/Modern'
import { Slider } from '../slider/Slider'
import { Overview } from '../overview/Overview'
import { NewLetter } from '../newsletter/NewLetter'
import { Footer } from '../footer/Footer'

export const  Main= () => {
  return (
    <div>
<Intro/>
<Modern/>
<Slider/>
<Overview/>
<NewLetter/>
<Footer/>

    </div>
  )
}
