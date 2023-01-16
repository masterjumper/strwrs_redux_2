import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesAsync } from '../../features/species/speciesSlice';
import Species from './Species';
//import useReposSpecies from '../../Hooks/useReposSpecies'


const SpeciesList = () => {
  const list = useSelector(state => state.species)  
  let dispatch = useDispatch();  
  /* const [repo, setRepo] = useState(null) */
  useEffect(() => {         
      dispatch(getSpeciesAsync());         
      /* // eslint-disable-next-line react-hooks/exhaustive-deps */      
  },[dispatch]);

  
  
  return (
    
      <View styles={styles.container}> 
      {
        

        /* console.log(
            'vista...', list.data.map(
              (items)=>{items.data}
              )) */
      }               
      <FlatList
          data={list.data.map((item)=>          
                item.map((subitem)=>          
                {subitem}
              ))
          }      
          ItemSeparatorComponent={ItemSeparator}
          renderItem={({ item:subitem }) => (
            <Species {...subitem} />
          )}
      />
      </View>    
    
  );
};


const styles = StyleSheet.create({
  separator: {
    height: 10,
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export default SpeciesList;