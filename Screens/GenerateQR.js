import { StyleSheet,Text, View,Button, TextInput, Alert,TouchableWithoutFeedback,Keyboard, Dimensions} from 'react-native';
import React,{useState,useRef} from 'react'
import QRCode from 'react-native-qrcode-svg';
import ViewShot from 'react-native-view-shot'
import * as Sharing from 'expo-sharing';

export default function App() {
  const ref=useRef();
  const [imageUri,setImageUri]=useState('');

   const [QRtext,setQRText]=useState('');
   const [isGenerate,setIsGenerate]=useState(false);

   const onChangeText=(val)=>{
    setQRText(val); 
    setIsGenerate(false)
   }

   const onPress=()=>{
    if(QRtext===''){
        Alert.alert('QR Code','Please Type QR text')
    }else{
        setIsGenerate(true)
    }
   
   }

   const SaveImageUri=()=>{
      ref.current.capture().then(uri=>{setImageUri(uri)})
    }

  const ShareQRCode=()=>{
   SaveImageUri();
   console.log(imageUri);
    if(imageUri){
      const options={
        url:imageUri,
        message:'Share QR'
      }
      Sharing.shareAsync(imageUri, options)
    }
   }
     
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <View style={{marginTop:80}}>
            <TextInput placeholder='type here' value={QRtext} onChangeText={(val)=>onChangeText(val)} multiline style={{height:100,width:300,marginHorizontal:30,borderWidth:1,padding:10}}/>
            <View style={{marginTop:20}}>
              <Button title='Generate QR' onPress={()=>onPress()} color={'tomato'}/>
            </View>
            
          </View>
          {isGenerate && 
            <View style={{marginTop:40}}>
              <ViewShot ref={ref} style={{justifyContent:'center',alignItems:'center'}} options={{fileName:'QR Code',format:'png',quality:0.9}}>
                  <QRCode value={QRtext} color='green' backgroundColor='white' size={150} />
              </ViewShot>
              <View style={{marginTop:40}}>
                  <Button title='Share QR' color={'tomato'} onPress={ShareQRCode}/>
              </View>
            </View>
          }
        </View>
      </TouchableWithoutFeedback>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },  
  barcodebox:{
    alignItems:'center',
    justifyContent:'center',
    height:250,
    width:250,
    overflow:'hidden',
    borderRadius:30,
    backgroundColor:'tomato',
    marginTop:20
  },
  maintext:{
    fontSize:16,
    margin:20
  },
});
