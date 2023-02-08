import React from "react"
import { View , StyleSheet, Image, Platform} from "react-native"
import StyledText from './StyledText'
import PeoplesStats from "./PeoplesStats"
import RepositoryPeoplesHeader from "./PeoplesHeader"
import theme from "../../theme"

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

const Peoples = props => (
    <View key={props.id} style={styles.container}>
        <RepositoryPeoplesHeader {...props}/>
        <PeoplesStats {...props}/>
    </View>
)

export default Peoples
