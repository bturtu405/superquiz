import React, { lazy, Suspense } from 'react';
import { Grid } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { HOME_ROUTE, TRIVIA_ROUTE, Routes } from '../Router/Routes';
import { HomePage } from '../pages/HomePage/HomePage';
const TriviaPage = lazy(() => import('../pages/TriviaPage/TriviaPage'));

export const App = () => {
  
  return <div style={{ backgroundSize: 'cover', backgroundColor: '#FF338D', }}>
    <Grid container
      spacing={1}
      justify='center'
      alignItems='center'>
      <BrowserRouter>
        <Routes pages={[{
          route: HOME_ROUTE,
          component: <HomePage />,
        },
        {
          route: TRIVIA_ROUTE,
          component:<Suspense fallback = {<div>Loading...</div>}><TriviaPage/></Suspense>,
        }]} />
      </BrowserRouter>
    </Grid>
  </div>
}; 
