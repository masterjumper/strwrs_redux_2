import React from "react"
import { View , StyleSheet, Image, Platform} from "react-native"
import StyledText from './StyledText'
import VehiclesStats from "./VehiclesStats"
import VehiclesHeader from "./VehiclesHeader"
import theme from "../../theme"

const Vehicles = props => (
    <View key={props.id} style={styles.container}>
        <VehiclesHeader {...props}/>
        <VehiclesStats {...props}/>
    </View>
)

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingBottom:5,
        paddingTop:5
    },
    language:{
        color: theme.colors.white,
        padding:4,
        backgroundColor:theme.colors.primary,
        /* backgroundColor:Platform.select({
            android:theme.colors.primary,
            ios:'orange',
            default:'purple'
        }), */
        alignSelf:'flex-start',
        borderRadius:4,
        overflow:'hidden'        
    },
    image:{
        width:48,
        height:48,
        borderRadius:4,
    }

})

export default Vehicles
