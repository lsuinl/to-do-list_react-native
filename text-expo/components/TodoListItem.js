//추가된 아이템 아이템 하나를 나타냄,해당 아이템이 완료 되었는지 아닌지의 여부를 나타내는 상태값을 가지게 되며 완료 체크 이벤트와 삭제 이벤트 기능을 다룸
// components/TodoListItem.js
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'; //아이콘!

const TodoListItem = ({textValue, id, checked, onRemove, onToggle}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPressOut={onToggle(id)}>
                {checked ? (
                <View style={styles.completeCircle}>
                    <Icon name="circledowno" size={30} color="#3143e8" />
                </View>
                ) : (
                <View style={styles.circle} />
                )}
            </TouchableOpacity>
            <Text
                style={[
                styles.text,
                checked ? styles.strikeText : styles.unstrikeText,
                ]}>
                {textValue}
            </Text>        
            <View style={styles.buttons}>
            <TouchableOpacity style={styles.buttonContainer}>   
                <Text style={styles.buttonText} onPress={onRemove(id)}>
                    <Icon name="delete" size={30} color="#e33057" />
                </Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderBottomColor: '#bbb',
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        flex: 5,
        fontWeight: '500',
        fontSize: 18,
        marginVertical: 20,
        width: 100,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        borderColor: 'blue',
        borderWidth: 2,
        marginRight: 20,
        marginLeft: 20,
    },
    completeCircle: {
        marginRight: 20,
        marginLeft: 20,
    },
    strikeText: {
        color: '#bbb',
        textDecorationLine: 'line-through',
    },
    unstrikeText: {
        color: '#29323c',
    },
    buttons: {
        flexDirection: 'row',
    },
    buttonContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
});

export default TodoListItem;