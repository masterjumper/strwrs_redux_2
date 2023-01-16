import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesAsync } from '../../features/species/speciesSlice';
import Species from './Species';
import url from '../../constants/url';

const SpeciesList = () => {
  const list = useSelector(state => state.species)  
  let dispatch = useDispatch();

  const [currentUrl, setcurrentUrl] = useState(url.urlspecies)  
  
  const renderLoader = () => {
    return (      
      <View styles={styles.loader}>
        <ActivityIndicator size={'large'}/>
      </View>   
    )
  }

  const loadMoreItems = () => {    
    setcurrentUrl(list.next)
  }

  useEffect(() => { 
    if(list.next){
      dispatch(getSpeciesAsync(currentUrl));
    }
  },[dispatch, currentUrl]);

  return (
    <SafeAreaView>
        <View styles={styles.container}>                       
        <FlatList contentContainerStyle={{ paddingBottom: 50 }}
            data={list.data.map((item)=>item)
            }      
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item:item }) => (
              <Species {...item} />
            )}
            keyExtractor={(item) => item.name}            
            ListFooterComponent={renderLoader}            
            //ListHeaderComponent={renderLoader}
            onEndReached = {loadMoreItems}
            onEndReachedThreshold={0} 
            refreshing={list.refreshing}                       
        />
        </View>    
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  separator: {
    height: 5,
  }, 
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:10,        
  },
  loader:{    
    margin:'center',
    alignItems:'center',
    
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export default SpeciesList;