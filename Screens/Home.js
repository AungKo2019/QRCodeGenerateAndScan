import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation=useNavigation();

  return (
    <View style={styles.container}>
        <View style={{height:40,width:120}}>
            <Button title='Generate QR' color={'tomato'} onPress={()=>navigation.navigate('GenerateQR')}/>
        </View>
        <View style={{marginTop:20,height:40,width:120}}>
            <Button title='Scanner' color={'tomato'} onPress={()=>navigation.navigate('Scanner')}/>
        </View>
        <View style={{marginTop:20,height:40,width:120}}>
            <Button title='Capture' color={'tomato'} onPress={()=>navigation.navigate('Capture')}/>
        </View>
        {/* <View style={{marginTop:20,height:40,width:120}}>
            <Button title='GalleryQRScan' color={'tomato'} onPress={()=>navigation.navigate('GalleryQRScan')}/>
        </View> */}
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        backgroundColor:'#F8F0E5'
    }
})