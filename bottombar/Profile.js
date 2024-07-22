import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
  
  const Profiledata = () => {
    return (
      <View style={styles.ProfileDataContainer}>
        <Text>profile</Text>
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

export default Profiledata;