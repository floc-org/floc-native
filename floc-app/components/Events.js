import { View, Text, Button } from 'react-native';

function Events(props) {
    return (
        <View>
            <Text>This is the events tab!</Text>
            <Button
                title='create an event'
                onPress={() => props.navigation.navigate('CreateEvent')} />
        </View>
    )
}

export default Events;