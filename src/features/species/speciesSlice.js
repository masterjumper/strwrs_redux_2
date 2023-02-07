
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const speciesSlice = createSlice(
 
  {
    name: 'species',
    initialState:{
        page: null,
        data:[],
        filtered:[],
        loading:true,
        next:'first',
        previous:null,
        refreshing:false,
        count:null        
    },
    reducers: {
        getList: (state, action) => {
            state.data = [...state.data, ...action.payload];            
            state.filtered = [...state.data, ...action.payload];
            state.loading = true;
            },
        setNext:(state, action)=>{
          state.next = action.payload
        },
        setRefresh:(state, action)=>{
          state.refreshing =  action.payload
        },
        setCount:(state, action)=>{
          state.count =  action.payload
        },
        setPrevious:(state, action)=>{
          state.previous =  action.payload
        },
        /* getListFil:(state, action)=>{
          state.data = [...state.data, ...action.payload];
        } */

        getListFil: (state, action) => {          
            state.filtered = action.payload;
            state.loading = false; 
           /*  return {
              ...state,
              data: [...state.data].filter((item) => item.name.toUpperCase().includes(fil.toUpperCase()))
            };        */          
        },
        getListAll:(state, action)=>{
          state.filtered = [...state.data, ...action.payload];
          state.loading = false; 
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
                                          dispatch(setNext(res.data.next))
                                          dispatch(setRefresh(true))
                                          dispatch(setCount(res.data.count))
                                          dispatch(setPrevious(res.data.previous))                                          
                                        })
      } catch (err) {
        throw new Error(err);
      }
    }else{dispatch(setRefresh(false))}
  }

export const getSpeciesAsync_fil=(fil, lista) => (dispatch) =>{
  if(fil){  
      const filtered =  lista.data.filter(
            (item) => item.name.toUpperCase().includes(fil.toUpperCase())
          );
      dispatch(getListFil(filtered))                                 
  }
  //else{
  //  dispatch(getListAll())
  //}
   /* return {
      ...state,
      data: [...state.data].filter((item) => item.name.toUpperCase().includes(fil.toUpperCase()))
    };   */
}

/*   export const getSpeciesAsync_fil = (fil) => async (dispatch) => {    
    if(fil){                             
          let searchResults =  state.data.filter((specie) => {
            specie.name.toUpperCase().includes(fil.toUpperCase())
            dispatch(getListFil(searchResults))                      
          })
    }
  } */

  // Action creators are generated for each case reducer function  
  export const { getList, setNext, setRefresh, setCount, setPrevious, getListFil, getListAll } = speciesSlice.actions

  export default speciesSlice.reducer