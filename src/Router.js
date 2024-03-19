import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Page1 from './component/navbar/page1'
import Page2 from './component/service/Page2'
import Page3 from './component/contact/page3'
import Page4 from './component/talent/page4'
import Page5 from './component/product/page5'
import Page6 from './component/industry/page6'
import Page7 from './component/insights/page7'

export default function Routerr() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/service' element={<Page2/>}/>
        <Route path='/contact' element={<Page3/>}/>
        <Route path='/Talent management' element={<Page4/>}/>
        <Route path='/product' element={<Page5/>}/>
        <Route path='/industry' element={<Page6/>}/>
        <Route path='/insights' element={<Page7/>}/>

      </Routes>
    </div>
  )
}
