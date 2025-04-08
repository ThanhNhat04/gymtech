// src/components/PostCard.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function PostCard({ post }) {
  return (
    <View style={styles.card}>
      {/* Header: Avatar, Username và Subreddit */}
      <View style={styles.header}>
        <Image source={{ uri: post.avatarUri }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.username}>u/{post.username}</Text>
          <Text style={styles.subreddit}>{post.subreddit}</Text>
        </View>
      </View>

      {/* Tiêu đề bài đăng */}
      <Text style={styles.title}>{post.title}</Text>

      {/* Ảnh bài đăng (nếu có) */}
      {post.imageUri ? (
        <Image
          source={{ uri: post.imageUri }}
          style={styles.postImage}
          resizeMode="cover"
        />
      ) : null}

      {/* Footer: Mỗi nút được bao bọc riêng */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.individualFooterItem}>
          <Text style={styles.upvoteIcon}>⬆</Text>
          <Text style={styles.upvoteCount}>
            {post.upvotes >= 1000
              ? (post.upvotes / 1000).toFixed(1) + 'k'
              : post.upvotes}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualFooterItem}>
          <Text style={styles.commentIcon}>💬</Text>
          <Text style={styles.commentCount}>{post.comments}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.individualFooterItem}>
          <Text style={styles.shareIcon}>↗</Text>
          <Text style={styles.shareLabel}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginVertical: 8,
    // Shadow cho iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    // Elevation cho Android
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  headerText: {
    flexDirection: 'column',
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  subreddit: {
    fontSize: 12,
    color: '#888',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#222',
    marginBottom: 8,
  },
  postImage: {
    width: '100%',
    height: 150,
    borderRadius: 6,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  individualFooterItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0e0e0', // Nền xám cho mỗi nút
    borderRadius: 8,            // Bo tròn các góc
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginRight: 8,
  },
  upvoteIcon: {
    fontSize: 16,
    color: '#FF4500', // Màu upvote đặc trưng Reddit
    marginRight: 3,
  },
  upvoteCount: {
    fontSize: 14,
    color: '#333',
  },
  downvoteIcon: {
    fontSize: 16,
    color: '#7193FF', // Màu downvote đặc trưng
  },
  commentIcon: {
    fontSize: 16,
    color: '#888',
    marginRight: 3,
  },
  commentCount: {
    fontSize: 14,
    color: '#333',
  },
  shareIcon: {
    fontSize: 16,
    color: '#888',
    marginRight: 3,
  },
  shareLabel: {
    fontSize: 14,
    color: '#333',
  },
});
