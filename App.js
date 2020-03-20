import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import View1 from './views/view1';
import View2 from './views/view2';

export default function App() {
  return (
    <View style={styles.container}>
      <View2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
