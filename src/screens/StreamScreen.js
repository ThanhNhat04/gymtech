import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
// import { CameraView, CameraType, useCameraPermissions } from 'expo-camera'; // Giữ lại nếu bạn cần camera

export default function StreamScreen() {
  const [cameraPermission, setCameraPermission] = useState(null);

  // Bạn có thể thêm logic để xin quyền camera ở đây nếu cần

  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://cf.s4h.edu.vn/' }}
        style={styles.webview}
      />
      {/* Bạn có thể thêm các nút hoặc thành phần khác ở đây nếu cần */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});