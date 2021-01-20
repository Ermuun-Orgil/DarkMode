import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { AppearanceProvider } from 'react-native-appearance'
import { Home } from './screens'


const App = () => {
  return (
    <AppearanceProvider>
        <Home />
    </AppearanceProvider>
  );
};

const styles = StyleSheet.create({

});
export default App;
