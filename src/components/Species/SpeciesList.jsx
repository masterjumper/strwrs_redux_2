import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesAsync } from '../../features/species/speciesSlice';
import Species from './Species';
//import useReposSpecies from '../../Hooks/useReposSpecies'


const SpeciesList = () => {
  const list = useSelector(state => state.species)  
  let dispatch = useDispatch();
  const [currentUrl, setcurrentUrl] = useState('https://swapi.dev/api/species/?page=&format=json')  
  
  const renderLoader = () => {
    
    return (
      //console.log('loader');
      <View styles={styles.loader}>
          <ActivityIndicator size={'large'}/>
      </View>   
    )
  }

  const loadMoreItems = () => {    
    setcurrentUrl(list.next)    
  }

  useEffect(() => {         
      dispatch(getSpeciesAsync(currentUrl));         
      /* // eslint-disable-next-line react-hooks/exhaustive-deps */      
  },[dispatch, currentUrl]);

  return (
        <View styles={styles.container}>                       
        <FlatList
            data={list.data.map((item)=>item)
            }      
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item:item }) => (
              <Species {...item} />
            )}
            //keyExtractor={(item) => item.name}            
            ListFooterComponent={renderLoader}            
            onEndReached = {loadMoreItems}
            onEndReachedThreshold={0.5}                        
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
  },
  loader:{    
    margin:'center',
    alignItems:'center'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export default SpeciesList;