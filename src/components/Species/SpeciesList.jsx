import React, { useEffect, useState}  from 'react';
import {SafeAreaView, FlatList, View, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSpeciesAsync } from '../../features/species/speciesSlice';
import Species from './Species';
import url from '../../constants/url';

const SpeciesList = () => {
  const[search, setSearch] = useState([]);
  //const[masterData, setmasterData]= useState([]);
  const[filterData, setfilterData]= useState([]);

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
      setfilterData(list);
    }
  },[dispatch, currentUrl]);

  const searchFilter=(text)=>{
    
    if(text){
      const newData = list.data.filter((item)=>{        
          const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
          const textData = text.toUpperCase();       
          return itemData.indexOf(textData) > -1;        
        });
      setfilterData(newData);

    }else{
      //setfilterData(masterData);
      setSearch(text);
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
        
        <FlatList contentContainerStyle={{ paddingBottom: 50 }}
            //data={list.data.map((item)=>item)
            data={filterData.map((item)=>item)
            }      
            ItemSeparatorComponent={ItemSeparator}
            renderItem={({ item:item }) => (
              <Species {...item} />
            )}
            //keyExtractor={(item) => item.name}            
            //keyExtractor={(item, index) => index.toString()}
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

export default SpeciesList;