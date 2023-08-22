import React, { useState } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ImagePickerComponent = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImagePicker = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access media library was denied.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <View style={styles.profilePic}>
      {selectedImage && <Image source={{ uri: selectedImage }} style={styles.image} />}
      <Button title="Select Profile picture" onPress={handleImagePicker} />
    </View>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    padding: 16,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 16,
  },
});

export default ImagePickerComponent;
