import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Button, TouchableOpacity,
} from 'react-native';


function Separator() {
    return <View style={styles.separator} />;
}

export default function View1() {
    return (
        <View style={styles.container}>
            <Text  style={styles.Header}>Welcome Back</Text>
            <Text  style={styles.TextStyle}> Please Log in to continue </Text>
            <Separator />

            <TouchableOpacity
                style={styles.SubmitButtonStyle1}
            >

            <Text style={styles.ButtonTextStyle}> Sign in </Text>

            </TouchableOpacity>

            <Separator />


            <TouchableOpacity
                style={styles.SubmitButtonStyle2}
            >

            <Text style={styles.ButtonTextStyle}> Sign out </Text>

            </TouchableOpacity>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192224',
        justifyContent: 'center',
    },
    separator: {
        marginVertical: 8,
    },

    SubmitButtonStyle1: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#65DC92',
        borderRadius: 10,
    },
    SubmitButtonStyle2: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#5E6769',
        borderRadius: 10,
    },

    Header: {
        color: '#E8E9E9',
        textAlign: 'center',
        fontSize: 30,


    },


    TextStyle: {
        color: '#E8E9E9',
        textAlign: 'center',
        opacity: 0.5
    },

    ButtonTextStyle: {
        color: '#E8E9E9',
        textAlign: 'center',
    }

});
