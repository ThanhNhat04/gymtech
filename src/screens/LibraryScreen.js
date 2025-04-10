// // src/screens/LibraryScreen.js
// import React from 'react';
// import { 
//   View, 
//   Text, 
//   StyleSheet, 
//   Image, 
//   FlatList, 
//   TouchableOpacity 
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// // Dữ liệu mẫu cho bài tập
// const exercises = [
//   {
//     id: '1',
//     name: 'Basic Push-Ups',
//     imageUri: 'https://via.placeholder.com/100x100.png?text=Basic+Push+Up',
//     videoUri: 'https://example.com/video1.mp4',
//   },
//   {
//     id: '2',
//     name: 'Diamond Push-Ups',
//     imageUri: 'https://via.placeholder.com/100x100.png?text=Diamond+Push+Up',
//     videoUri: 'https://example.com/video2.mp4',
//   },
//   {
//     id: '3',
//     name: 'Spiderman Push-Ups',
//     imageUri: 'https://via.placeholder.com/100x100.png?text=Spiderman+Push+Up',
//     videoUri: 'https://example.com/video3.mp4',
//   },
//   {
//     id: '4',
//     name: 'Superman Push-Ups',
//     imageUri: 'https://via.placeholder.com/100x100.png?text=Superman+Push+Up',
//     videoUri: 'https://example.com/video4.mp4',
//   },
//   {
//     id: '5',
//     name: 'One-armed Push-Ups',
//     imageUri: 'https://via.placeholder.com/100x100.png?text=One+armed+Push+Up',
//     videoUri: 'https://example.com/video5.mp4',
//   },
// ];

// export default function LibraryScreen() {
//   const navigation = useNavigation();

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         navigation.navigate('VideoDisplayScreen', { videoUri: item.videoUri })
//       }
//     >
//       <Image
//         source={{ uri: item.imageUri }}
//         style={styles.exerciseImage}
//         resizeMode="contain"
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.exerciseName}>{item.name}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item) => item.id}
//         renderItem={renderItem}
//         contentContainerStyle={{ paddingVertical: 10 }}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//     paddingHorizontal: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ccc', // màu nền xám, bạn có thể thay đổi
//     marginVertical: 8,
//     borderRadius: 10,
//     padding: 10,
//     // Shadow for iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.15,
//     shadowRadius: 2,
//     // Elevation for Android
//     elevation: 2,
//   },
//   exerciseImage: {
//     width: 90,
//     height: 90,
//     marginRight: 10,
//     borderRadius: 8,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   exerciseName: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });


// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function LibraryScreen() {
//   const navigation = useNavigation();
//   const [exercises, setExercises] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch dữ liệu từ API khi component mount
//   useEffect(() => {
//     const fetchExercises = async () => {
//       try {
//         const response = await fetch('https://gym.s4h.edu.vn/api/exercises');
//         if (!response.ok) {
//           throw new Error('Failed to fetch exercises');
//         }
//         const data = await response.json();
//         // Giả sử API trả về một mảng các bài tập
//         setExercises(data);
//       } catch (error) {
//         console.error('Error fetching exercises:', error);
//         Alert.alert('Error', 'Failed to load exercises');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchExercises();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.card}
//       onPress={() =>
//         // navigation.navigate('VideoDisplayScreen', { videoUri: item.videoUri })
//         navigation.navigate('VideoDisplayScreen', { item: item })

//       }
//     >
//       <Image
//         source={{ uri: item.imageUri }}
//         style={styles.exerciseImage}
//         resizeMode="contain"
//       />
//       <View style={styles.textContainer}>
//         <Text style={styles.exerciseTitle}>
//           {item.exerciseTitle}
//         </Text>
//       </View>
//     </TouchableOpacity>
//   );

//   if (loading) {
//     return (
//       <View style={styles.centered}>
//         <ActivityIndicator size="large" color="#2ecc71" />
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={exercises}
//         keyExtractor={(item, index) => item._id || index.toString()}
//         renderItem={renderItem}
//         contentContainerStyle={styles.listContent}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#eee',
//     paddingHorizontal: 10,
//   },
//   centered: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   listContent: {
//     paddingVertical: 10,
//   },
//   card: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: '#ccc', // Bạn có thể đổi màu nền nếu cần
//     marginVertical: 8,
//     borderRadius: 10,
//     padding: 10,
//     // Shadow cho iOS
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.15,
//     shadowRadius: 2,
//     // Elevation cho Android
//     elevation: 2,
//   },
//   exerciseImage: {
//     width: 90,
//     height: 90,
//     marginRight: 10,
//     borderRadius: 8,
//   },
//   textContainer: {
//     flex: 1,
//   },
//   exerciseTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#000',
//   },
// });



// src/screens/LibraryScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LibraryScreen() {
  const navigation = useNavigation();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetch('https://gym.s4h.edu.vn/api/exercises');
        if (!response.ok) {
          throw new Error('Failed to fetch exercises');
        }
        const data = await response.json();
        // console.log(data)
        // Giả sử API trả về một mảng các bài tập theo model Exercise
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
        Alert.alert('Error', 'Failed to load exercises');
      } finally {
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate('VideoDisplayScreen', { exercise: item })
      }
    >
      <Image
        source={{ uri: item.imageUri }}
        style={styles.exerciseImage}
        resizeMode="contain"
      />
      <View style={styles.textContainer}>
        <Text style={styles.exerciseTitle}>{item.exerciseTitle}</Text>
      </View>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color="#2ecc71" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => item._id || index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingHorizontal: 10,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ccc', // Bạn có thể thay đổi màu nền nếu cần
    marginVertical: 8,
    borderRadius: 10,
    padding: 10,
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    // Elevation cho Android
    elevation: 2,
  },
  exerciseImage: {
    width: 90,
    height: 90,
    marginRight: 10,
    borderRadius: 8,
  },
  textContainer: {
    flex: 1,
  },
  exerciseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
