import React from 'react';
import { View } from 'react-native';
/* import AppBar from './AppBar';
import LoginPage from '../pages/Login'*/
import { Routes, Route}  from 'react-router-native';
/* import FilmsList from '../Films/FilmsList' */
import SpeciesList from '../Species/SpeciesList'
/* import PeoplesList from '../Peoples/PeoplesList' */
import AppBar from '../AppBars/AppBar'
import Home from '../Home/Home'

const Main = () => {
    return (      
        <View style={{ flex: 1 }}>
            <AppBar />
            <Routes>
                <Route path="/" element={<Home />}>                    
                </Route>               
                <Route 
                    path="species" 
                    element={<SpeciesList />} 
                    > 
                </Route>               
            </Routes>        
        </View>
    ) 
}

export default Main