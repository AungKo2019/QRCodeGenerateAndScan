// import React, { useState, useEffect } from 'react';
// import { View, Button, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import QRCodeScanner from 'react-native-qrcode-scanner';

// export default function App() {
//   const [image, setImage] = useState(null);

//   useEffect(() => {
//     (async () => {
//       const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//       if (status !== 'granted') {
//         alert('Permission to access media library is required!');
//       }
//     })();
//   }, []);

//   async function pickImage() {
//     try {
//       let result = await ImagePicker.launchImageLibraryAsync({
//         mediaTypes: ImagePicker.MediaTypeOptions.Images,
//         allowsEditing: true,
//         aspect: [4, 3],
//         quality: 1,
//       });

//       if (!result.cancelled) {
//         setImage(result.uri);
//       }
//     } catch (E) {
//       console.log(E);
//     }
//   }

//   const handleScan = ({ data }) => {
//     // 'data' contains the scanned QR code data
//     alert(`Scanned QR code: ${data}`);
//   };

//   return (
//     <View style={{flex:1}}>
//         <View style={{ justifyContent:'center',alignItems:'center' }}>
//             <QRCodeScanner onRead={handleScan} />
//         </View>
//         <View>
//             <Button title="Pick an image from camera roll" onPress={pickImage} />
//             {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//         </View>
//     </View> 
    
//   );


// }
