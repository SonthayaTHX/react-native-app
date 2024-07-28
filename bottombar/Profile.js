import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { launchCamera ,launchImageLibrary } from 'react-native-image-picker';

// async function requestPermissions() {
//   if (Platform.OS === 'android') {
//     try {
//       const granted = await PermissionsAndroid.requestMultiple([
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//       ]);

//       if (
//         granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
//         granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
//       ) {
//         console.log('You have permission to use the camera and access storage');
//       } else {
//         console.log('Permissions denied');
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }
// }

const Profiledata = () => {
//   const handleImagePicker = async () => {
//     await requestPermissions();
//     launchImageLibrary({ mediaType: 'photo' }, (response) => {
//       if (response.didCancel) {
//         console.log('User cancelled image picker');
//       } else if (response.errorCode) {
//         console.log('ImagePicker Error: ', response.errorMessage);
//       } else {
//         console.log('Response = ', response);
//       }
//     });
//   };

  return (
    <View style={styles.ProfileDataContainer}>
      {/* <TouchableOpacity onPress={handleImagePicker}> */}
        <Text style={{ fontSize: 20 }}>Profile</Text>
      {/* </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const OpenCamera = () => {
//   const [imgUrl, setImgUrl] = useState(
//     './assets/Logo_UP.png',
//   );
  // const OpenCameraLib = async () => {
  //   console.log('PRESS=====>>>');
  //   const result = await launchCamera();
  //   setImgUrl(result.assets[0].uri);
  //   console.log('RESULT=====>>>', result);
  // };
  // const openLib = async () => {
  //   console.log('PRESS=====>>>2');
  //   const result = await launchImageLibrary();
  //   setImgUrl(result.assets[0]?.uri);
  //   console.log('RESULT=====>>>', result);
  // };

  // const OpenCameraLib = async () => {
  //   console.log('PRESS=====>>>');
  //   const result = await launchCamera();
  //   if (result.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (result.error) {
  //     console.log('ImagePicker Error: ', result.error);
  //     Alert.alert('Error', 'Could not access the camera.');
  //   } else if (result.assets && result.assets.length > 0) {
  //     setImgUrl(result.assets[0].uri);
  //     console.log('RESULT=====>>>', result);
  //   }
  // };

  // const openLib = async () => {
  //   try {
  //     const result = await launchImageLibrary();
  //     if (result.assets) {
  //       setImgUrl(result.assets[0]?.uri);
  //     }
  //   } catch (error) {
  //     console.error('Error opening library: ', error);
  //   }
  // };
  // const openLib = async () => {
  //   console.log('PRESS=====>>>2');
  //   const result = await launchImageLibrary();
  //   if (result.didCancel) {
  //     console.log('User cancelled image picker');
  //   } else if (result.error) {
  //     console.log('ImagePicker Error: ', result.error);
  //     Alert.alert('Error', 'Could not access the gallery.');
  //   } else if (result.assets && result.assets.length > 0) {
  //     setImgUrl(result.assets[0]?.uri);
  //     console.log('RESULT=====>>>', result);
  //   }
  // };

//   return (
//     <View style={style.container}>
//       <View>
//         <Image
//         resizeMode="contain"
//         style={style.img}
//         source={{
//           uri: imgUrl,
//         }}
//         />
//       <TouchableOpacity style={style.btnCam} onPress={OpenCameraLib}>
//         <Text style={style.btnText}>Open Camera</Text>
//       </TouchableOpacity>
//       <TouchableOpacity style={style.btnCam} onPress={openLib}>
//         <Text style={style.btnText}>Open Gallery</Text>
//       </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

  const style = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    img: {
      width: '90%',
      height: 300,
      alignSelf: 'center',
      borderRadius: 6,
    },
    btnCam: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      width: 100,
      height: 40,
      borderRadius: 6,
      backgroundColor: '#7B2BA1',
    },
    btnText: {
      color: '#fff',
    },
  });
export default Profiledata;

