import React from 'react'
import { Route } from 'react-router-dom'
import TriviaPage from '../pages/TriviaPage/TriviaPage'
import { HomePage } from '../pages/HomePage/HomePage'

export const HOME_ROUTE = '/'
export const TRIVIA_ROUTE = '/Trivia';

interface RouteProps{
    pages:{
        route:string;
        component:JSX.Element;
    }[]
}

export const Routes = ({pages}:RouteProps) => {
    return <>
        {pages.map((page)=>  <Route exact path={page.route} render={() => page.component} />)}
    </>
}




