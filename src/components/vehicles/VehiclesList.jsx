import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getAsync, get_fil, get_all } from '../../features/vehicles/vehiclesSlice';
import Vehicles from './Vehicles';
import url from '../../constants/url';

const VehiclesList = () => {
  const[search, setSearch] = useState([]);

  const list = useSelector(state => state.vehicles)  
  
  let dispatch = useDispatch();

  const [currentUrl, setcurrentUrl] = useState(url.urlvehicles)  
  
  const renderLoader = () => {
    return (      
      <View styles={styles.loader}>
        {
          currentUrl == null ?  '' : <ActivityIndicator size={'large'}/>
        }
      </View>   
    )
  }

  const loadMoreItems = () => {    
    setcurrentUrl(list.next)
  }

  useEffect(() => { 
    if(list.next){
      dispatch(getAsync(currentUrl));      
    }
  },[dispatch, currentUrl]);

  const searchFilter=(text)=>{    
    if(text){       
      dispatch(get_fil(text, list));
      setSearch(text);
    }else{                  
      setSearch(text);     
      dispatch(get_all());
    }  
  }

  return (
    <SafeAreaView>
        <View styles={styles.container}> 
        <TextInput
          style={styles.textInputStyle}
          value={search}
          placeholder='Search Here'
          underlineColorAndroid="transparent"
          onChangeText={(text)=>searchFilter(text)}
        />
        
        <FlatList contentContainerStyle={{ paddingBottom: 250 }}            
            data={list.filtered.map((item)=>item)}
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item:item }) => (
              <Vehicles {...item} />
            )}            
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={renderLoader}                        
            onEndReached = {loadMoreItems}
            onEndReachedThreshold={0.5} 
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
  },
  textInputStyle:{
    height:40,
    borderWidth:1,
    paddingLeft:10,
    margin:5,
    borderColor:'black',
    backgroundColor:'grey'
  }
});

const ItemSeparator = () => <View style={styles.separator} />;

export default VehiclesList;