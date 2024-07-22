import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { SafeAreaProvider , SafeAreaView } from 'react-native-safe-area-context';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const Homepage = () => {
  return (
    <View style={styles.HomeDataContainer}>
      <Text>Homepage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeDataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Homepage;