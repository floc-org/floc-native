import { View, Text, Button, Image } from "react-native";
import { useState } from 'react';
import { launchImageLibrary, showImagePicker, launchCamera } from 'react-native-image-picker';
// import * as ImagePicker from 'expo-image-picker';

function Profile() {

    const [filePath, setFilePath] = useState({});
    function openLibrary() {
        console.log('test1');
        const options = {
            mediaType: 'photo',
            // maxWidth: '',
            // maxHeight: '',
        }
        launchImageLibrary(options, (response) => {
            console.log('test2: ' + response);
            console.log('base64 -> ', response.base64);
            console.log('uri -> ', response.uri);
            console.log('width -> ', response.width);
            console.log('height -> ', response.height);
            console.log('fileSize -> ', response.fileSize);
            console.log('type -> ', response.type);
            console.log('fileName -> ', response.fileName);
            setFilePath(response);
        });
    }
    return (
        <View>
            <Text>This is the user's profile.</Text>
            <Button title='open image library' onPress={openLibrary} />
            <Image
                source={{ uri: filePath.uri }}
            // style={styles.imageStyle}
            />
        </View>
    )
}

export default Profile;