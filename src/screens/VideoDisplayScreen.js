// // src/screens/VideoDisplayScreen.js
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
//   ScrollView,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import { VideoView, useVideoPlayer } from 'expo-video';
// import { useNavigation } from '@react-navigation/native';
// import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
// import videoData from '../data/videoData';

// export default function VideoDisplayScreen() {
//   const navigation = useNavigation();

//   // Khởi tạo player với videoUri mặc định từ videoData
//   const player = useVideoPlayer(videoData.videoUri, (player) => {
//     player.loop = true;
//     player.play();
//   });
//   const [status, setStatus] = useState({});

//   useEffect(() => {
//     if (!videoData.videoUri) {
//       Alert.alert('Error', 'No video provided', [
//         { text: 'OK', onPress: () => navigation.goBack() },
//       ]);
//     }
//   }, [navigation]);

//   if (!videoData.videoUri) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#2ecc71" />
//         <Text style={styles.processingText}>Loading video...</Text>
//       </View>
//     );
//   }

//   const handleBack = () => {
//     navigation.goBack();
//   };

//   const handleUpload = () => {
//     Alert.alert('Upload', 'Upload button pressed');
//   };

//   const handleReco = () => {
//     // Khi ấn nút Reco chuyển qua màn hình CameraScreen
//     // navigation.navigate('Camera');
//     navigation.navigate('Home');

//   };

//   // Nếu cần, có thể thêm hàm toggle play (không bắt buộc)
//   const handleTogglePlay = () => {
//     if (player.playing) {
//       player.pause();
//     } else {
//       player.play();
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Thanh điều hướng trên cùng */}
//       <View style={styles.navBar}>
//         <TouchableOpacity onPress={handleBack} style={styles.navButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <View style={{ flex: 1 }} />
//       </View>

//       <ScrollView contentContainerStyle={styles.scrollContent}>

//         {/* Video hiển thị bài tập sử dụng expo-video */}
//         <View style={styles.videoContainer}>
//           <VideoView
//             style={styles.video}
//             player={player}
//             allowsFullscreen
//             allowsPictureInPicture
//           />
//         </View>

//         {/* Thông tin bài tập */}
//         <View style={styles.infoContainer}>
//           <Text style={styles.exerciseTitle}>{videoData.exerciseTitle}</Text>
//           <View style={styles.rowBetween}>
//             <View style={styles.rowLeft}>
//               <MaterialCommunityIcons
//                 name="arm-flex-outline"
//                 size={24}
//                 color="#555"
//                 style={{ marginRight: 8 }}
//               />
//               <Text style={styles.subInfoText}>{videoData.muscleLabel}</Text>
//             </View>
//             <Text style={styles.levelText}>{videoData.level}</Text>
//           </View>

//           <Text style={styles.sectionTitle}>Technique Summary:</Text>
//           <View style={styles.bulletContainer}>
//             {videoData.techniqueSummary.map((point, index) => (
//               <Text key={index} style={styles.bulletText}>
//                 * {point}
//               </Text>
//             ))}
//           </View>

//           <Text style={styles.sectionTitle}>Learn more:</Text>
//           <View style={styles.learnMoreContainer}>
//             <Image
//               source={{ uri: videoData.learnMore.imageUri }}
//               style={styles.learnMoreImage}
//             />
//             <View style={{ flex: 1 }}>
//               <Text style={styles.learnMoreText}>
//                 {videoData.learnMore.text}
//               </Text>
//             </View>
//           </View>

//           <Text style={styles.sectionTitle}>Execution</Text>
//           <View style={styles.stepsContainer}>
//             {videoData.execution.map((step, index) => (
//               <Text key={index} style={styles.stepText}>
//                 {step}
//               </Text>
//             ))}
//           </View>
//         </View>
//       </ScrollView>

//       {/* Phần chứa 2 nút Upload và Reco */}
//       <View style={styles.actionButtonsContainer}>
//         <TouchableOpacity style={styles.actionButton} onPress={handleUpload}>
//           <Ionicons name="cloud-upload-outline" size={20} color="#333" />
//           <Text style={styles.actionButtonText}>Upload</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.actionButton, styles.actionButtonDivider]}
//           onPress={handleReco}
//         >
//           <Ionicons name="videocam-outline" size={20} color="#333" />
//           <Text style={styles.actionButtonText}>Reco</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff', // giao diện trắng
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   processingText: {
//     color: '#333',
//     fontSize: 16,
//     marginTop: 10,
//   },
//   navBar: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//   },
//   navButton: {
//     padding: 5,
//   },
//   scrollContent: {
//     paddingBottom: 20,
//   },
//   actionButtonsContainer: {
//     flexDirection: 'row',
//     borderTopWidth: 1,
//     borderTopColor: '#ddd',
//   },
//   actionButton: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#f1f1f1',
//     paddingVertical: 12,
//   },
//   actionButtonDivider: {
//     borderLeftWidth: 1,
//     borderLeftColor: '#ddd',
//   },
//   actionButtonText: {
//     fontSize: 16,
//     color: '#333',
//     marginLeft: 5,
//   },
//   videoContainer: {
//     width: '100%',
//     aspectRatio: 16 / 9,
//     backgroundColor: '#000',
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//   },
//   infoContainer: {
//     padding: 16,
//   },
//   exerciseTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//     marginBottom: 8,
//   },
//   rowBetween: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   rowLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   subInfoText: {
//     fontSize: 16,
//     color: '#555',
//   },
//   levelText: {
//     fontSize: 16,
//     color: '#555',
//     fontWeight: '600',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     color: '#333',
//     marginTop: 16,
//     marginBottom: 8,
//   },
//   bulletContainer: {
//     marginLeft: 16,
//     marginBottom: 8,
//   },
//   bulletText: {
//     fontSize: 14,
//     color: '#333',
//     marginBottom: 4,
//   },
//   learnMoreContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#f1f1f1',
//     borderRadius: 8,
//     padding: 10,
//     marginBottom: 16,
//   },
//   learnMoreImage: {
//     width: 80,
//     height: 60,
//     borderRadius: 6,
//     marginRight: 10,
//   },
//   learnMoreText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   stepsContainer: {
//     marginBottom: 20,
//   },
//   stepText: {
//     fontSize: 14,
//     color: '#555',
//     marginBottom: 8,
//     lineHeight: 20,
//   },
// });


// src/screens/VideoDisplayScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

export default function VideoDisplayScreen() {
  const navigation = useNavigation();
  const route = useRoute();

  // Lấy exercise được gửi qua params (có thể undefined nếu không được truyền)
  const exercise = route.params?.exercise;

  // Đảm bảo giá trị videoUri luôn là chuỗi
  const videoUri = exercise ? exercise.videoUri || '' : '';

  useEffect(() => {
    if (!exercise || !videoUri) {
      Alert.alert('Error', 'No exercise data provided', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    }
  }, [exercise, videoUri, navigation]);

  if (!exercise || !videoUri) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
        <Text style={styles.processingText}>Loading video...</Text>
      </View>
    );
  }

  // Khởi tạo player với videoUri từ exercise
  const player = useVideoPlayer(videoUri, (player) => {
    player.loop = true;
    player.play();
  });

  const [status, setStatus] = useState({});

  const handleBack = () => {
    navigation.goBack();
  };

  const handleUpload = () => {
    player.pause();
    Alert.alert('Upload', 'Upload button pressed');
  };

  const handleReco = () => {
    player.pause();
    navigation.navigate('StreamScreen');
  };

  return (
    <View style={styles.container}>
      {/* Thanh điều hướng */}
      <View style={styles.navBar}>
        <TouchableOpacity onPress={handleBack} style={styles.navButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <View style={{ flex: 1 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Video hiển thị bài tập sử dụng expo-video */}
        <View style={styles.videoContainer}>
          <VideoView
            style={styles.video}
            player={player}
            allowsFullscreen
            allowsPictureInPicture
          />
        </View>

        {/* Thông tin bài tập */}
        <View style={styles.infoContainer}>
          <Text style={styles.exerciseTitle}>{exercise.exerciseTitle}</Text>
          <View style={styles.rowBetween}>
            <View style={styles.rowLeft}>
              <MaterialCommunityIcons
                name="arm-flex-outline"
                size={24}
                color="#555"
                style={{ marginRight: 8 }}
              />
              <Text style={styles.subInfoText}>{exercise.muscleLabel}</Text>
            </View>
            <Text style={styles.levelText}>{exercise.level}</Text>
          </View>

          <Text style={styles.sectionTitle}>Technique Summary:</Text>
          <View style={styles.bulletContainer}>
            {exercise.techniqueSummary &&
              exercise.techniqueSummary.map((point, index) => (
                <Text key={index} style={styles.bulletText}>
                  * {point}
                </Text>
              ))}
          </View>

          <Text style={styles.sectionTitle}>Learn more:</Text>
          <View style={styles.learnMoreContainer}>
            {exercise.learnMore &&
            exercise.learnMore.images &&
            exercise.learnMore.images.length > 0 ? (
              <Image
                source={{ uri: exercise.learnMore.images[0].imageUri }}
                style={styles.learnMoreImage}
              />
            ) : (
              <View style={[styles.learnMoreImage, { backgroundColor: '#ccc' }]} />
            )}
            <View style={{ flex: 1 }}>
              <Text style={styles.learnMoreText}>
                {exercise.learnMore ? exercise.learnMore.title : 'Learn more...'}
              </Text>
            </View>
          </View>

          <Text style={styles.sectionTitle}>Execution</Text>
          <View style={styles.stepsContainer}>
            {exercise.execution &&
              exercise.execution.map((step, index) => (
                <Text key={index} style={styles.stepText}>
                  {step}
                </Text>
              ))}
          </View>
        </View>
      </ScrollView>

      {/* Phần chứa 2 nút Upload và Reco ở dưới cùng */}
      <View style={styles.actionButtonsContainer}>
        <TouchableOpacity style={styles.actionButton} onPress={handleUpload}>
          <Ionicons name="cloud-upload-outline" size={20} color="#333" />
          <Text style={styles.actionButtonText}>Upload</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.actionButtonDivider]}
          onPress={handleReco}
        >
          <Ionicons name="videocam-outline" size={20} color="#333" />
          <Text style={styles.actionButtonText}>Reco</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // giao diện trắng
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  processingText: {
    color: '#333',
    fontSize: 16,
    marginTop: 10,
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  navButton: {
    padding: 5,
  },
  scrollContent: {
    paddingBottom: 20,
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f1f1f1',
    paddingVertical: 12,
  },
  actionButtonDivider: {
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 5,
  },
  videoContainer: {
    width: '100%',
    aspectRatio: 16 / 9,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    padding: 16,
  },
  exerciseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subInfoText: {
    fontSize: 16,
    color: '#555',
  },
  levelText: {
    fontSize: 16,
    color: '#555',
    fontWeight: '600',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginTop: 16,
    marginBottom: 8,
  },
  bulletContainer: {
    marginLeft: 16,
    marginBottom: 8,
  },
  bulletText: {
    fontSize: 14,
    color: '#333',
    marginBottom: 4,
  },
  learnMoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  learnMoreImage: {
    width: 80,
    height: 60,
    borderRadius: 6,
    marginRight: 10,
  },
  learnMoreText: {
    fontSize: 14,
    color: '#333',
  },
  stepsContainer: {
    marginBottom: 20,
  },
  stepText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
    lineHeight: 20,
  },
});
