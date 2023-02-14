import React from 'react';
import { View } from 'react-native';
/* import AppBar from './AppBar';
import LoginPage from '../pages/Login'*/
import {Routes, Route}  from 'react-router-native';

import SpeciesList from '../species/SpeciesList'
import StarshipsList from '../starships/StarshipsList'
import PlanetsList from '../planets/PlanetsList'
import PeoplesList from '../peoples/PeoplesList'
import VehiclesList from '../vehicles/VehiclesList'
import SpeciesDetail from '../species/SpeciesDetail'
import PlanetsDetail from '../planets/PlanetsDetail'
import StarshipsDetail from '../starships/StarshipsDetail';
import PeoplesDetail from '../peoples/PeoplesDetail';
import VehiclesDetail from '../vehicles/VehiclesDetail';

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
                <Route 
                    path="starships" 
                    element={<StarshipsList />} 
                    > 
                </Route>     
                <Route 
                    path="planets" 
                    element={<PlanetsList />} 
                    > 
                </Route>
                <Route 
                    path="peoples" 
                    element={<PeoplesList />} 
                    > 
                </Route>     
                <Route 
                    path="vehicles" 
                    element={<VehiclesList />} 
                    > 
                </Route>
                <Route 
                    path="speciesdetail" 
                    element={<SpeciesDetail />} 
                    > 
                </Route>
                <Route 
                    path="planetsdetail" 
                    element={<PlanetsDetail />} 
                    > 
                </Route>
                <Route 
                    path="starshipsdetail" 
                    element={<StarshipsDetail />} 
                    > 
                </Route>
                <Route 
                    path="peoplesdetail" 
                    element={<PeoplesDetail />} 
                    > 
                </Route> 
                <Route 
                    path="vehiclesdetail" 
                    element={<VehiclesDetail />} 
                    > 
                </Route> 
                               
            </Routes> 
        </View>
    ) 
}
export default Main