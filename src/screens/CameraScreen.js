// src/screens/CameraScreen.js
import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  ActivityIndicator 
} from 'react-native';
import { Camera } from 'expo-camera'; 
import { Ionicons } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.centered}>
        <Text style={styles.permissionText}>No access to camera</Text>
      </View>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log('Photo URI:', photo.uri);
      // Điều hướng sang màn hình VideoDisplayScreen hoặc xử lý ảnh theo yêu cầu
      navigation.navigate('VideoDisplayScreen', { videoUri: photo.uri });
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        style={styles.camera}
        type={Camera.Constants.Type.back}  // Đảm bảo expo-camera được cài đặt đúng
        ref={cameraRef}
      />
      <View style={styles.controls}>
        <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
          <Ionicons name="camera" size={36} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Nền đen cho màn hình camera
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  permissionText: {
    color: '#fff',
    fontSize: 18,
  },
  camera: {
    flex: 1,
  },
  controls: {
    position: 'absolute',
    bottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  captureButton: {
    backgroundColor: '#3498db',
    borderRadius: 50,
    padding: 20,
  },
});
