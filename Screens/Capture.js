import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useRef, useState} from 'react'
import ViewShot from 'react-native-view-shot'
import * as Sharing from 'expo-sharing';

const Capture = () => {
  const ref=useRef();
  const [imageUri,setImageUri]=useState('');
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:"center"}}>
      <ViewShot ref={ref} style={{width:'80%',height:'50%'}} options={{fileName:'QR Code',format:'png',quality:0.9}}>
        <View style={{width:'100%',height:'100%',backgroundColor:'green'}}>
        </View>
      </ViewShot>
      <TouchableOpacity style={{borderWidth:1,borderRadius:10,padding:10,marginTop:50}} onPress={()=>{ref.current.capture().then(uri=>{
        console.log('Screen Shot URI ',uri);
        setImageUri(uri);
      })}}>
        <Text>Capture Screen</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{borderWidth:1,borderRadius:10,padding:10,marginTop:50}} onPress={()=>{
        const options={
          url:imageUri,
          message:'Share Image'
        }
        Sharing.shareAsync(imageUri, options)
      }}>
        <Text>Share Image</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Capture

const styles = StyleSheet.create({

})