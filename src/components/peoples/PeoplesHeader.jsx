
import React from 'react' 
//import React, { useEffect, useState}  from 'react';
//import { useSelector, useDispatch } from 'react-redux';
//import { get_specie } from '../../features/peoples/peoplesSlice';
import {View, Image, StyleSheet, ImageBackground} from 'react-native'
import StyledText from './StyledText'
import theme from '../../theme'

const styles = StyleSheet.create({    
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        alignSelf:'flex-start',
        marginTop:4,
        marginBottom:4,
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }
})

const imgURL = 'https://starwars-visualguide.com/assets/img/characters/'

const PeoplesHeader = props =>{
/*  const specie_found = useSelector(state => state.peoples.specie)                    
     let dispatch = useDispatch();
    useEffect(() => { 
        if(props.species[0]){
          dispatch(get_specie(props.species[0]));      
        }
      },[dispatch, props.species[0]]);
*/
    return (        
        <View style={{flexDirection:'row', paddingBottom:2}}>
            <View style={{ flexGrow:0 }}>
                <ImageBackground imageStyle={{ borderRadius: 6}} source= {{ uri:  `https://starwars-visualguide.com/assets/img/big-placeholder.jpg`}}>
                    <Image style={styles.image} source= {{ uri: 
                        `${imgURL + props.url.split('/')[props.url.split('/').length - 2]}.jpg`
                     }}></Image>
                </ImageBackground>
            </View>
            <View style={{ flex:1, paddingLeft:10 }}>                
                <StyledText fontWeight='bold'>{props.name.toLocaleUpperCase()}</StyledText>
                <StyledText color='secondary'>Gender: {props.gender}</StyledText>
                <StyledText style={styles.language}> Birth Year: {props.birth_year}</StyledText>
                {/* props.species[0] == '' ? 'n/a' : props.species[0] */}
                {/* <StyledText color='secondary'> {props.gender.charAt(0).toUpperCase()+ props.gender.slice(1)}</StyledText> */}                
                {/* <StyledText style={styles.language}>{props.language}</StyledText> */}                
            </View>
        </View>
    )}

export default PeoplesHeader