import { configureStore } from '@reduxjs/toolkit'
import speciesSlice from '../features/species/speciesSlice'
import StarshipsSlice from '../features/starships/starshipsSlice'
import planetsSlice from '../features/planets/planetsSlice'
import peoplesSlice from '../features/peoples/peoplesSlice'
import vehiclesSlice from '../features/vehicles/vehiclesSlice'

export const store = configureStore({
  reducer: {
    species:speciesSlice,
    starships:StarshipsSlice,
    planets:planetsSlice,
    peoples:peoplesSlice,
    vehicles:vehiclesSlice,
  },  
})

