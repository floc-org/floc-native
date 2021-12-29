// Probably unnecessary. Will delete once sure. 

import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { useState } from 'react';
import EventCard from './EventCard';

const { width } = Dimensions.get('window');

function Events(props) {

    let events_array = [
        {   doc_id: 1,
            img: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cae044c6-5b49-44a4-b799-c765d8cd9ddc/d9wl20a-8c3a0719-09e0-4c67-afaf-ffb695caf649.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2NhZTA0NGM2LTViNDktNDRhNC1iNzk5LWM3NjVkOGNkOWRkY1wvZDl3bDIwYS04YzNhMDcxOS0wOWUwLTRjNjctYWZhZi1mZmI2OTVjYWY2NDkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.AVpZDWTekvsoQjOEF0zFXEjCvL7MTg4mVwkXNXaPtP0',
            name: 'Ananya', activity: 'Tennis', time: '4PM', location: 'Bay Club', description: 'Winner winner chicken dinner!'
        },
        {   doc_id: 2,
            img: 'https://media.istockphoto.com/vectors/cartoon-baby-turtle-in-the-field-vector-id1190553183?k=20&m=1190553183&s=612x612&w=0&h=Q9X6e59ek2n3wQY7o7zYFJYZdiOVW9sI8WTMnn7xCvo=',
            name: 'Aishwarya', activity: 'Bike Ride', time: '8AM', location: 'Hawk Hill', description: "Let's crush the hills!"
        },
        {   doc_id: 3,
            img: 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cool-monkey-with-sunglasses-and-headphones-mister-tee.jpg',
            name: 'Niladri', activity: 'House Party', time: '7PM', location: '605 Jackson', description: "Drunk-driving encouraged, let's race!"
        },
        {   doc_id: 4,
            img: 'https://static.vecteezy.com/system/resources/previews/003/686/667/non_2x/dolphin-cartoon-cute-fish-illustrations-free-vector.jpg',
            name: 'Jesse', activity: 'Surf', time: '7AM', location: 'Ocean Beach', description: 'Ride or Drown!'
        },
        {   doc_id: 5,
            img: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/17/Bugs_Bunny.svg/1200px-Bugs_Bunny.svg.png',
            name: 'Deepak', activity: 'Bouldering', time: '5PM', location: 'Planet Granite', description: 'Prepare to fall!'
        },
    ]

    function insertCard(value) {
        return (
            <View key={value.doc_id}>
                <EventCard
                    img={value.img}
                    name={value.name}
                    activity={value.activity}
                    time={value.time}
                    location={value.location}
                    description={value.description}
                />
            </View>
        )
    }

    return (
        <View>
            <View>
                <Text style={styles.textHeader}>{events_array.length} events in your circle!</Text>
            </View>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                decelerationRate={0.9}
                snapToInterval={width}
            >
                {events_array.map(insertCard)}
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