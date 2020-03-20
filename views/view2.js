import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    Button, TouchableOpacity,
} from 'react-native';

import { TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';



function Separator() {
    return <View style={styles.separator} />;
}

export default function View2() {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
            <Text style={styles.Label}>EMAIL ID</Text>

            <TextInput
                style={styles.Field}
                placeholder=" Enter username/Phone No."
            />
            <Separator />


            <Text style={styles.Label}>PASSWORD</Text>

            <TextInput

                style={styles.Field}
                secureTextEntry={true}
                placeholder=" &#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
                        <Icon name="eye" size={20} color="#900" />

            <Separator />

            <TouchableOpacity
                style={styles.SubmitButtonStyle}
            >

                <Text style={styles.ButtonTextStyle}> CONTINUE </Text>

            </TouchableOpacity>
            <Separator />

            <Text style={styles.ButtonTextStyle}> OR </Text>

            <Separator />

            <TouchableOpacity
                style={styles.FaceID}
            >

                <Text style={styles.ButtonTextStyle}> LOGIN WITH FACE ID </Text>

            </TouchableOpacity>
            <Separator/>
            </View>
            <View style={styles.separator2}>
                <Text style={styles.ButtonTextStyle}>
                    Don't have an Account?
            <Text style={styles.GreenText} >
                        {' '}Sign Up!
            </Text>
                </Text>

            </View>

        </View>





    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#192224',
        justifyContent: 'center',
    },
    container1: {
        flex: 1,
        marginTop: 200,
        backgroundColor: '#192224',
        justifyContent: 'center',
    },

    separator: {
        marginVertical: 8,
    },
    separator2: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 36
    },


    Field: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#3F484A',
        borderRadius: 10,
    },


    Label: {
        color: '#E8E9E9',
        textAlign: 'left',
        marginLeft: 30,
    },

    TextStyle: {
        color: '#E8E9E9',
        textAlign: 'center',
    },

    SubmitButtonStyle: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        backgroundColor: '#65DC92',
        borderRadius: 10,
    },
    ButtonTextStyle: {
        color: '#E8E9E9',
        textAlign: 'center',

    },
    GreenText: {
        color: '#65DC92',
        textAlign: 'center',


    },


    FaceID: {

        marginTop: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#dbdbd9",

    },

    cont: {

        marginBottom: 2
    }



});
