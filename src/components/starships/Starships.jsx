import React from "react"
import { View , StyleSheet, Image, Platform} from "react-native"
import StarshipsStats from "./StarshipsStats"
import StarshipsHeader from "./StarshipsHeader"
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

const Starships = props => (
    <View key={props.id} style={styles.container}>
        <StarshipsHeader {...props}/>
        <StarshipsStats {...props}/>
    </View>
)

export default Starships
