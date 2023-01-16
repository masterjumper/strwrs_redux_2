
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
        //list: (state) => {},
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        //state.value += 1
        //const respspecies = async () => {
        getList: (state, action) => {
            state.data = [...state.data, ...action.payload];
            state.loading = true;
            },

        getNext:(state, action)=>{
          state.next = action.payload
        }            
        //}      
      //other action item of list: something     
    },
  })
  
  //export const getSpeciesAsync = (data) => async (dispatch) => {    
  export const getSpeciesAsync = (url) => async (dispatch) => {        
    if(url){
      try {        
        //const response = await axios.get(`${API_URL}/${data}`);
        //const response = await axios.get('https://swapi.dev/api/species/?page=&format=json', page)      
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
  //export const { list, getList } = speciesSlice.actions
  export const { getList, getNext } = speciesSlice.actions
  //export const showTodo = (state) => state.todo.data;

  export default speciesSlice.reducer