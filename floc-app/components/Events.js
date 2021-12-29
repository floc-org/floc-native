// Probably unnecessary. Will delete once sure. 

import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import EventCard from './EventCard';

const { width } = Dimensions.get('window');

function Events(props) {
    return (
        <View>
            <Text style={styles.textHeader}>3 events in your circle!</Text>
            <ScrollView
                style={styles.scrollView}
                horizontal={true}
                decelerationRate={'fast'}
                snapToInterval={width}
                // snapToAlignment={"center"}
            >
                <EventCard
                    img='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cool-monkey-with-sunglasses-and-headphones-mister-tee.jpg'
                    name='Deepak'
                    activity='Bike ride'
                    time='9AM'
                    location='Hawk hill'
                    description='Going to crush the hills!'
                />
                <EventCard
                    img='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cool-monkey-with-sunglasses-and-headphones-mister-tee.jpg'
                    name='Deepak'
                    activity='Bike ride'
                    time='9AM'
                    location='Hawk hill'
                    description='Going to crush the hills!'
                />
                <EventCard
                    img='https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-cool-monkey-with-sunglasses-and-headphones-mister-tee.jpg'
                    name='Deepak'
                    activity='Bike ride'
                    time='9AM'
                    location='Hawk hill'
                    description='Going to crush the hills!'
                />
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