import React from "react";
import Post from "./Post";

const Posts = () => {
  // const array = new Array(10).fill("codeguyakash");
  let dummyUsers = [
    {
      username: "user1",
      time: "2 hours ago",
      comments: ["Nice!", "Great post!"],
      likes: 15,
      img: "image1.jpg",
      music: "Song 1",
      profilepic: "profilepic1.jpg",
    },
    {
      username: "user2",
      time: "1 hour ago",
      comments: ["Awesome!", "Love it!"],
      likes: 20,
      img: "image2.jpg",
      music: "Song 2",
      profilepic: "profilepic2.jpg",
    },
    {
      username: "user3",
      time: "30 minutes ago",
      comments: ["Cool!", "Fantastic!"],
      likes: 10,
      img: "image3.jpg",
      music: "Song 3",
      profilepic: "profilepic3.jpg",
    },
    // Add more users as needed
  ];

  // Displaying the dummy user array
  // console.log(dummyUsers);
  return (
    <div className="mt-10">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
