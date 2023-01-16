import React from 'react' 
import {View} from 'react-native'
import StyledText from './StyledText'

const parseThounsands = value =>{    
    return value == 'unknown' ? String(value) : 
        value >= 1000000000000 ? `${Math.round(value/1000000000000)}B` : 
        value >= 1000000 ? `${Math.round(value/1000000)}M` : 
         `${Math.round(value/100)/10}k`     
}

const SpeciesStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        {/* <View>            
            <StyledText fontWeight='bold' align='center'> {props.starship_class.charAt(0).toUpperCase()+ props.starship_class.slice(1)}</StyledText>
            <StyledText align='center'>Class</StyledText>
            
        </View>
        <View>            
            <StyledText fontWeight='bold' align='center'>{props.max_atmosphering_speed}</StyledText>
            <StyledText >Speed</StyledText>
            
        </View>
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.length}</StyledText>
            <StyledText >Length</StyledText>
        </View>
        <View>            
            <StyledText fontWeight='bold' align='center'> {props.passengers}</StyledText>
            <StyledText >Passengers</StyledText>            
        </View> */}
        
    </View>
    )
}

export default SpeciesStats