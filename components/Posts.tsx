import React from "react";
import Post, { TPost } from "@/components/Post";
import Container from "./ContentContainer";

const posts_fake: TPost[] = [
  {
    _id: "1",
    author: "John Doe",
    content: "This is a sample post content.",
    images: [
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
    ],
    timestamp: new Date("2024-06-20T10:00:00Z"),
    statics: {
      likes: "10M",
      comments: "1.2K",
      shares: "12K",
    },
    comments: [
      {
        author: "User1",
        content: "Great post man!",
        timestamp: new Date(),
        likes: 0,
        replyTo: null,
      },
      {
        author: "User2",
        content: "Keep it up!",
        timestamp: new Date(),
        likes: 1,
        replyTo: null,
      },
      {
        author: "User3",
        content: "on fire bro 😍!",
        timestamp: new Date(),
        likes: 19,
        replyTo: null,
      },
    ],
  },

  {
    _id: "2",
    author: "Jane Smith",
    content: "This is a sample post content.",
    timestamp: new Date("9/11/2025"),
    images: ["https://placehold.co/300.png"],
    statics: {
      likes: "104",
      comments: "103",
      shares: "1K",
    },
    comments: [
      {
        author: "User1",
        content: "Great post man!",
        timestamp: new Date(),
        likes: 0,
        replyTo: null,
      },
      {
        author: "User2",
        content: "Keep it up!",
        timestamp: new Date(),
        likes: 1,
        replyTo: null,
      },
      {
        author: "User3",
        content: "on fire bro 😍!",
        timestamp: new Date(),
        likes: 19,
        replyTo: null,
      },
    ],
  },

  {
    _id: "3",
    author: "Alice Johnson",
    content: "This is a sample post content.",
    timestamp: new Date("2024-06-22T15:30:00Z"), // two days ago
    images: [
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
      "https://placehold.co/300.png",
    ],
    statics: {
      likes: "140K",
      comments: "130",
      shares: "1K",
    },
    comments: [
      {
        author: "User1",
        content: "Great post man!",
        timestamp: new Date(),
        likes: 0,
        replyTo: null,
      },
      {
        author: "User2",
        content: "Keep it up!",
        timestamp: new Date(),
        likes: 1,
        replyTo: null,
      },
      {
        author: "User3",
        content: "on fire bro 😍!",
        timestamp: new Date(),
        likes: 19,
        replyTo: null,
      },
    ],
  },
];

export default function Posts() {
  return (
    <>
      {posts_fake.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
}
