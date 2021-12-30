import { StyleSheet, TextInput, View, Button } from 'react-native';
import { useState } from 'react';
import FirebaseInitialize from '../configs/FirebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

FirebaseInitialize;
const firestore = firebase.firestore();

function CreateEvent(props) {

    const [eventName, setEventName] = useState('');
    const [eventTime, setEventTime] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');

    function postEventHandler() {
        
        firestore.collection('events').add({ // TODO: Validation and duplicate detection.
            username: 'Deepak', // TODO: Fetch name from user session.
            creation_time: 'xxx', // TODO: Fetch system time.
            event_details: {
                name: eventName,
                time: eventTime,
                location: eventLocation,
                description: eventDescription,
            }
        });

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
            <TextInput
                style={styles.input}
                placeholder="describe it"
                onChangeText={(text) => setEventDescription(text)}
                value={eventDescription} />
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