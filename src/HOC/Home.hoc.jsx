import React from 'react'
// import { Component } from 'react'
import { Route } from 'react-router-dom'

//Layout
import HomeLayout from '../layouts/Homepage.layout'

function HomeLayoutHoc({component: Component, ...rest}) {
  return (
    <>
   
   <Route {...rest} 
     component={
     (props)=>(
      <HomeLayout>
      <Component {...props}/>
      </HomeLayout>
     
     )
    
    }/>
  
    </>
  )
}

export default HomeLayoutHoc