import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {
  return (
    <>
        <Header />
        <main className="">
            { children }
        </main>
        <Footer />
    </>
  )
}

export default MainLayout