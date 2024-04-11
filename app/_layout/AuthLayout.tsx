import React from 'react'
import AuthHeader from './AuthHeader'

const AuthLayout: React.FC<ComponentWithChildrenOnly> = ({children}) => {
  return (
    <main className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <AuthHeader />
        <section className="main-content">
            { children }
        </section>
    </main>
  )
}

export default AuthLayout