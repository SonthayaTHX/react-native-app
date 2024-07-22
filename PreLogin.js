import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const PreLogin = ({}) => {
  const navigation = useNavigation();
    return (
        <View style={styles.PerLoginDataContainer}>
          <Image 
          source={require('./assets/Logo_UP.png')} 
          style={styles.Img} 
          />
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>เข้าใช้งานสำหรับนิสิต</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={() => navigation.navigate('TopAndBot')}>
            <Text style={styles.buttonText}>เข้าใช้งานสำหรับบุคคลทั่วไป</Text>
          </TouchableOpacity>
        </View>
      );
};

const styles = StyleSheet.create({
    PerLoginDataContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#965bb2', // Adjust the background color
    },
    Img: {
      // backgroundColor: '#ffffff',
      width: 200, // Adjust the width and height as needed
      height: 200,
      marginBottom: 20,
      resizeMode: 'contain',
      bottom: 50,
    },
    button: {
      backgroundColor: '#7B2BA1', // Adjust the button color
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      marginVertical: 10,
      bottom: 50,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
});
export default PreLogin;