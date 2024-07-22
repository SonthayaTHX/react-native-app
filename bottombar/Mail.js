import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';

  const Maildata = () => {
    return (
      <View style={styles.MailDataContainer}>
        <Text>Mail</Text>
      </View>
    );
  };
  const styles = StyleSheet.create({
    MailDataContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
export default Maildata;