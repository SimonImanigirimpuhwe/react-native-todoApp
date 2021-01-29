import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native'


const Form = ({ handleSubmit, setText, text }) => {

    const handleChange = (val) => {
        setText(val)
    }
    return ( 
        <View>
            <TextInput 
              style={styles.input}
              placeholder="new todo ..."
              onChangeText={handleChange}
            />
            <View style={styles.button}>
            <Button onPress={() => handleSubmit(text)} title="Add todo" color='coral' />
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    button: {
        backgroundColor: 'coral',
        borderRadius: 10
    }
})

export default Form;