import { View, Text, Image, Button, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

function EventCard(props) {
    // Initially, load the first card. If a card was previously loaded, load the next one. 
    return (
        <View style={styles.container}>
            <Image
                style={styles.img}
                source={{uri:props.img}}
            />
            <Text>{props.username}</Text>
            <Text>{props.activity}</Text>
            <Text>{props.time}</Text>
            <Text>{props.location}</Text>
            <Text>{props.description}</Text>
            <Button title="Say you're interested"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        borderWidth: 0,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        borderColor: '#808080',
        marginTop: 50,
        elevation: 10,
        width: width-20,
    },
    img: {
        resizeMode: 'contain', 
        width: '100%', 
        height: '70%'
    },
});

export default EventCard;