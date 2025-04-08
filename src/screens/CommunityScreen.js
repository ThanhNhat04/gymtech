import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import PostCard from '../components/postCard';

const postsData = [
  {
    id: '1',
    username: 'johnDoe',
    subreddit: 'funny',
    title: 'Check out this amazing meme!',
    upvotes: 2500,
    comments: 120,
    imageUri: 'https://via.placeholder.com/350x150.png?text=Meme+1',
    avatarUri: 'https://via.placeholder.com/36.png?text=JD',
  },
  {
    id: '2',
    username: 'janeSmith',
    subreddit: 'aww',
    title: 'Cute kitten playing in the garden',
    upvotes: 3200,
    comments: 200,
    imageUri: 'https://via.placeholder.com/350x150.png?text=Kitten',
    avatarUri: 'https://via.placeholder.com/36.png?text=JS',
  },
  {
    id: '3',
    username: 'techGuru',
    subreddit: 'technology',
    title: 'New smartphone review: Features and performance',
    upvotes: 1850,
    comments: 75,
    imageUri:
      'https://via.placeholder.com/350x150.png?text=Smartphone+Review',
    avatarUri: 'https://via.placeholder.com/36.png?text=TG',
  },
  {
    id: '4',
    username: 'travelBug',
    subreddit: 'travel',
    title: 'My trip to the Alps was breathtaking!',
    upvotes: 4300,
    comments: 150,
    imageUri: 'https://via.placeholder.com/350x150.png?text=Alps+Trip',
    avatarUri: 'https://via.placeholder.com/36.png?text=TB',
  },
  {
    id: '5',
    username: 'foodie123',
    subreddit: 'food',
    title: 'The best pasta recipe ever!',
    upvotes: 2900,
    comments: 80,
    imageUri: 'https://via.placeholder.com/350x150.png?text=Pasta+Recipe',
    avatarUri: 'https://via.placeholder.com/36.png?text=F1',
  },
];

function CreatePostHeader() {
  return (
    <View style={styles.createPostContainer}>
      <Image
        source={{
          uri:
            'https://i.etsystatic.com/32237469/r/il/72bad1/4009560313/il_fullxfull.4009560313_q4ps.jpg',
        }}
        style={styles.avatar}
      />
      <TouchableOpacity style={styles.inputBox}>
        <Text style={styles.placeholderText}>
          What's on your mind, Nhật?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mediaButton}>
        <FontAwesome
          name="image"
          size={18}
          color="#333"
          style={{ marginRight: 5 }}
        />
        <Text style={styles.mediaButtonText}>Ảnh</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function CommunityScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={postsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={CreatePostHeader}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  createPostContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    // Elevation cho Android
    elevation: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  inputBox: {
    flex: 1,
    backgroundColor: '#eee',
    borderRadius: 20,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  placeholderText: {
    color: '#777',
  },
  mediaButton: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  mediaButtonText: {
    color: '#333',
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 20,
  },
});
