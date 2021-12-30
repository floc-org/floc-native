import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import EventCard from './EventCard';
import FirebaseInitialize from '../configs/FirebaseConfig';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState, useEffect } from 'react';

const { width } = Dimensions.get('window');
FirebaseInitialize;
const firestore = firebase.firestore();

function Events(props) {

    const [eventsArray, setEventsArray] = useState([]); // useState re-renders the component every time the data value of eventsArray changes.

    // useEffect runs the enclosed function upon each render.
    // Expressing the function to fetch data (enclosed within useEffect) as aync allows the usage of 'await' to get snapshot, 
    // which blocks execution of the next line inside the async function until this get is resolved. 
    useEffect(async () => {
        // Fetch data from firestore and push it into an array.
        console.log('this ran');
        var events_array_inner = [];
        const snapshot = await firestore.collection('events').get() // Snapshot is an iterable collection of documents.
        snapshot.forEach((event) => { // Event is a document.
            var doc_id = event.id
            var data = event.data()
            events_array_inner.push({
                doc_id: doc_id,
                img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
                username: data.username,
                activity: data.event_details.name,
                time: 'dummy time', // TODO: Change time to string in firestore for now, since timestamp needs some processing before it can be rendered.
                location: data.event_details.location,
                description: data.event_details.description,
            })
        })
        // Update the value of eventsArray so that the component can re-render and display updated data.
        setEventsArray(events_array_inner);
    }, [])

    function insertCard(event) {
        return (
            // The ternary (conditional) operator is needed here because on initial render event is an empty array 
            // and trying to read fields from it will throw an error.
            <View key={event ? event.doc_id : null}>
                <EventCard
                    img={event ? event.img : null}
                    username={event ? event.username : null}
                    activity={event ? event.activity : null}
                    time={event ? event.time : null}
                    location={event ? event.location : null}
                    description={event ? event.description : null}
                />
            </View>
        )
    }

    return (
        <View>
            <View>
                <Text style={styles.textHeader}>{eventsArray.length} events in your circle!</Text>
            </View>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                decelerationRate={0.9}
                snapToInterval={width}
            >
                {eventsArray.map(insertCard)}
            </ScrollView>
            <Button
                title='create an event'
                onPress={() => props.navigation.navigate('CreateEvent')} />
        </View >
    )
}

const styles = StyleSheet.create({
    textHeader: {
        color: '#8a2be2',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20,
    },
});

export default Events;


// Not needed here, but useful for unit testing. Keep commented for now and move to a test file later.
// let events_array = [
//     {   doc_id: 1,
//         img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cae044c6-5b49-44a4-b799-c765d8cd9ddc/d9wl20a-8c3a0719-09e0-4c67-afaf-ffb695caf649.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZTA0NGM2LTViNDktNDRhNC1iNzk5LWM3NjVkOGNkOWRkY1wvZDl3bDIwYS04YzNhMDcxOS0wOWUwLTRjNjctYWZhZi1mZmI2OTVjYWY2NDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AVpZDWTekvsoQjOEF0zFXEjCvL7MTg4mVwkXNXaPtP0',
//         username: 'Ananya', activity: 'Tennis', time: '4PM', location: 'Bay Club', description: 'Winner winner chicken dinner!'
//     },
//     {   doc_id: 2,
//         img: 'https://media.istockphoto.com/vectors/cartoon-baby-turtle-in-the-field-vector-id1190553183?k=20&m=1190553183&s=612x612&w=0&h=Q9X6e59ek2n3wQY7o7zYFJYZdiOVW9sI8WTMnn7xCvo=',
//         username: 'Aishwarya', activity: 'Bike Ride', time: '8AM', location: 'Hawk Hill', description: "Let's crush the hills!"
//     },
//     {   doc_id: 3,
//         img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cool-monkey-with-sunglasses-and-headphones-mister-tee.jpg',
//         username: 'Niladri', activity: 'House Party', time: '7PM', location: '605 Jackson', description: "Drunk-driving encouraged, let's race!"
//     },
//     {   doc_id: 4,
//         img: 'https://static.vecteezy.com/system/resources/previews/003/686/667/non_2x/dolphin-cartoon-cute-fish-illustrations-free-vector.jpg',
//         username: 'Jesse', activity: 'Surf', time: '7AM', location: 'Ocean Beach', description: 'Ride or Drown!'
//     },
//     {   doc_id: 5,
//         img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
//         username: 'Deepak', activity: 'Bouldering', time: '5PM', location: 'Planet Granite', description: 'Prepare to fall!'
//     },
// ]