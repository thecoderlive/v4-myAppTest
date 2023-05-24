
import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

const DataJSON = {
  "feed": [
    {
      "post_header": {
        "user_image": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/123.png",
        "user_name": "John Doe",
        "menu": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/456.png"
      },
      "post_images": [
        {
          "post": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/49.png",
          "like": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/101.png",
          "comment": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/202.png",
          "share": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/303.png",
          "save": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/404.png"
        },
        {
          "post": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/567.png",
          "like": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/68.png",
          "comment": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/169.png",
          "share": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/111.png",
          "save": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/222.png"
        }
      ],
      "post_label": "My first post",
      "post_description": "This is a dummy post",
      "view_comments": "View all comments",
      "profile_image": "https://the-coder.s3.ap-south-1.amazonaws.com/images_540/456.png",
      "comment1": "This is a comment"
    }
  ]
}

const MyApp = () => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Image source={{ uri: item.post_header.user_image }} style={styles.userImage} />
          <Text style={styles.userName}>{item.post_header.user_name}</Text>
          <Image source={{ uri: item.post_header.menu }} style={styles.menuIcon} />
        </View>
        <FlatList
          data={item.post_images}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(post, index) => index.toString()}
          renderItem={({ item: post }) => (
            <View style={styles.postImageContainer}>
              <Image source={{ uri: post.post }} style={styles.postImage} />
              <View style={styles.postIconsContainer}>
                <Image source={{ uri: post.like }} style={styles.postIcon} />
                <Image source={{ uri: post.comment }} style={styles.postIcon} />
                <Image source={{ uri: post.share }} style={styles.postIcon} />
                <Image source={{ uri: post.save }} style={styles.postIcon} />
              </View>
            </View>
          )}
        />
        <Text style={styles.postLabel}>{item.post_label}</Text>
        <Text style={styles.postDescription}>{item.post_description}</Text>
        <Text style={styles.viewComments}>{item.view_comments}</Text>
        <View style={styles.commentContainer}>
          <Image source={{ uri: item.profile_image }} style={styles.commentProfileImage} />
          <Text style={styles.commentText}>{item.comment1}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://api.freelogodesign.org/assets/thumb/logo/5951692_300.png' }} style={styles.logo} />
      <FlatList
        data={DataJSON.feed}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    "container": {
        "flex": 1,
        "backgroundColor": "#fff",
        "paddingHorizontal": 20,
        "paddingTop": 40,
        "fontFamily": "Al Nile"
    },
    "logo": {
        "width": 100,
        "height": 100,
        "alignSelf": "center",
        "marginBottom": 20,
        "fontFamily": "Al Nile"
    },
    "postContainer": {
        "marginBottom": 20,
        "fontFamily": "Al Nile"
    },
    "postHeader": {
        "flexDirection": "row",
        "alignItems": "center",
        "marginBottom": 10,
        "fontFamily": "Al Nile"
    },
    "userImage": {
        "width": 40,
        "height": 40,
        "borderRadius": 20,
        "marginRight": 10,
        "fontFamily": "Al Nile"
    },
    "userName": {
        "flex": 1,
        "fontWeight": "bold",
        "fontSize": 16,
        "fontFamily": "Al Nile"
    },
    "menuIcon": {
        "width": 20,
        "height": 20,
        "fontFamily": "Al Nile"
    },
    "postImageContainer": {
        "marginRight": 10,
        "fontFamily": "Al Nile"
    },
    "postImage": {
        "width": 150,
        "height": 150,
        "borderRadius": 10,
        "marginBottom": 10,
        "fontFamily": "Al Nile"
    },
    "postIconsContainer": {
        "flexDirection": "row",
        "alignItems": "center",
        "fontFamily": "Al Nile"
    },
    "postIcon": {
        "width": 20,
        "height": 20,
        "marginRight": 10,
        "fontFamily": "Al Nile"
    },
    "postLabel": {
        "fontWeight": "bold",
        "fontSize": 16,
        "marginBottom": 5,
        "fontFamily": "Al Nile"
    },
    "postDescription": {
        "marginBottom": 10,
        "fontFamily": "Al Nile"
    },
    "viewComments": {
        "color": "#48c76e",
        "fontWeight": "bold",
        "marginBottom": 10,
        "fontFamily": "Al Nile"
    },
    "commentContainer": {
        "flexDirection": "row",
        "alignItems": "center",
        "fontFamily": "Al Nile"
    },
    "commentProfileImage": {
        "width": 30,
        "height": 30,
        "borderRadius": 15,
        "marginRight": 10,
        "fontFamily": "Al Nile"
    },
    "commentText": {
        "flex": 1,
        "fontSize": 16,
        "fontFamily": "Al Nile"
    }
});

export default MyApp;
