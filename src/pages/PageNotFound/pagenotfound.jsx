import React from 'react'
import { Error404Page } from './stylePageNotFound';
import PageNotFound404 from "/src/assets/404Error.gif";

export default function PageNotFound() {
  return (
   <Error404Page>
    <img className='Page404' src={PageNotFound404} alt="" />
   </Error404Page>
  )
}
