import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Qrcode = () => {
  return (
    <View style={styles.QrcodeDataContainer}>
      <Text>Qrcode</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    QrcodeDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Qrcode;