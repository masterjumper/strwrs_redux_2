
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const speciesSlice = createSlice({
    name: 'species',
    initialState:{
        page: null,
        data:[],
        loading:true,
        next:null,
        preview:null
    },
    reducers: {

        getList: (state, action) => {
            state.data = [...state.data, ...action.payload];
            state.loading = true;
            },

        getNext:(state, action)=>{
          state.next = action.payload
        }                    
      //other action item of list: something     
    },
  })

  export const getSpeciesAsync = (url) => async (dispatch) => {        
    if(url){
      try {                    
          const response = await axios.get(url)
                                        .then((res) => {                                     
                                          dispatch(getList(res.data.results))                                     
                                          dispatch(getNext(res.data.next))
                                        })
      } catch (err) {
        throw new Error(err);
      }
    }
  }

  // Action creators are generated for each case reducer function  
  export const { getList, getNext } = speciesSlice.actions

  export default speciesSlice.reducer