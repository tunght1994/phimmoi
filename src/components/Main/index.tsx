import React from 'react'
import { WrapMain } from './index.style'
import Header from './Header'
import Content from './Contents'
import Footer from './Footer'


const Main = () => {
  
  return (
    <WrapMain>
      <Header />
      <Content />
      <Footer />
    </WrapMain>
  )
}

export default Main