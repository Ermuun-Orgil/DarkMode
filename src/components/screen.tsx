import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from 'react-native';
import { useColorScheme } from 'react-native-appearance'


export const Screen: React.FC<any> = ({ children }) => {

    const mode = useColorScheme();

    const styles = StyleSheet.create({
        full: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: mode === 'dark' ? 'black' : 'white',
        }

    });

    return (
        <>
            <StatusBar animated barStyle={mode === 'dark' ? 'light-content' : 'dark-content'} />
            <SafeAreaView style={styles.full}>
                {children}
            </SafeAreaView>
        </>
    );
};
