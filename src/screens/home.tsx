import React from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';
import { Screen } from '../components'
import { useColorScheme } from 'react-native-appearance'

export const Home = () => {

    const colorScheme = useColorScheme();
    console.log(colorScheme) 

    const styles = StyleSheet.create({
        text: {
            fontSize: 30,
            color: colorScheme === 'dark' ? 'blue' : 'orange',
        },
    });

  return (
    <>
        <Screen>
            <Text style={styles.text}>
                {`You selected ${colorScheme == 'dark' ? '🌙' : '☀️'} mode`}
            </Text>
        </Screen>
    </>
  );
};

