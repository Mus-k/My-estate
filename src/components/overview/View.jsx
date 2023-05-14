import React from 'react'
import './Overview.css'
import { Display } from './Display'
export const View = () => {
  return (
    <main>
      <section
        className="o-container"
      
      >
        <div className="title">
          <h2 className="o-title">Testimonials</h2>
          <div className="underline"></div>
        <Display/>
        </div>
      </section>
    </main>
  )
}
