import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';

function CreateEvent(props) {

    const [eventName, setEventName] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventLocation, setEventLocation] = useState('');

    function postEventHandler() {
        console.log(eventName);
        props.navigation.navigate('Events');

    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="say what you'll be doing"
                onChangeText={(text) => setEventName(text)}
                value={eventName} />
            <TextInput
                style={styles.input}
                placeholder="say when"
                onChangeText={(text) => setEventTime(text)}
                value={eventTime} />
            <TextInput
                style={styles.input}
                placeholder="say where"
                onChangeText={(text) => setEventLocation(text)}
                value={eventLocation} />
            <Button
                style={styles.btn}
                title='Post event'
                onPress={postEventHandler} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 30,
    },
    input: {
        borderColor: "gray",
        width: "100%",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
    },
    btn: {
    }
});

export default CreateEvent;