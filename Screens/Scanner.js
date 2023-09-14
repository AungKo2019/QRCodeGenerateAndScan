import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button, TextInput } from 'react-native';
import React,{useState,useEffect} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission,setHasPermission]=useState(null);
  const [scanned,setScanned]=useState(false);
  const [text,setText]=useState('Not yet Scanned');

  const askForCameraPermission=()=>{
    (async ()=>{
      const {status}=await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status==='granted')
      console.log(status)
    })()
  }

  //Request Camera Permission
  useEffect(()=>{
    askForCameraPermission();
  },[])

  //what happen when we scann the bar code
  const handleBarCodeScanned=({type,data})=>{
    setScanned(true);
    setText(data);;
    console.log('Type: '+ type + '\nData: ' +data)
  } 

  //Check permission and return the screens
  if(hasPermission===null){
    return(
      <View style={styles.container}>
        <Text>Request for camera permission</Text>
      </View>
    )
  }

  if(hasPermission===false){
    return(
      <View style={styles.container}>
        <Text style={{margin:10}}>No Access to camera</Text>
        <Button title='Allow Camera' onPress={()=>askForCameraPermission()}/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={{justifyContent:"center",alignItems:"center"}}>
        <View style={styles.barcodebox}>
          <BarCodeScanner
            onBarCodeScanned={scanned?undefined:handleBarCodeScanned}
            style={{height:400,width:400}}
          />
        </View>
        <Text style={styles.maintext}>{text}</Text>
        {scanned && <Button title='Scan again' onPress={()=>setScanned(false)} color={'tomato'}/>}
      </View>
      
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
  }
});
