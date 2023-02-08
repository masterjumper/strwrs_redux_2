import React from 'react' 
import {View} from 'react-native'
import StyledText from './StyledText'

const VehiclesStats = props =>{
    return (
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <View>            
            {/* <StyledText fontWeight='bold' align='center'> {props.vehicle_class.charAt(0).toUpperCase()+ props.vehicle_class.slice(1)}</StyledText> */}
            <StyledText fontWeight='bold' align='center'> {props.vehicle_class}</StyledText>
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
        </View>
        
    </View>
    )
}

export default VehiclesStats