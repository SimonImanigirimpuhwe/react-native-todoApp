import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


const TodoItem = ({ item, handlePress, handleComplete }) => {
    return ( 
        <View style={styles.item}>
            <Text style={item.completed ? styles.complete : styles.itemText}>{item.text}</Text>
            <View style={styles.action}>
                <TouchableOpacity onPress={() => handlePress(item.key)}>
                    <MaterialIcons name="delete" size={20} color="red" style={styles.delete}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleComplete(item.key)}>
                    <MaterialIcons name="check-circle" size={20} color="darkcyan"/>
                </TouchableOpacity>
            </View>
        </View>
     );
}
 
const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderStyle: 'dashed',
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemText: {
        marginLeft: 5,
    },
    complete: {
        marginLeft: 5,
        opacity: 0.5,
        textDecorationLine: 'line-through',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between' 
    },
    delete: {
        marginRight: 10,
    }
})

export default TodoItem;