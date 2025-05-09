import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabViewComponent from './src/componentes/TabView';

export default () => (
  <NavigationContainer>
    <SafeAreaView style={{ flex: 1 }}>
      <TabViewComponent />
    </SafeAreaView>
  </NavigationContainer>
);