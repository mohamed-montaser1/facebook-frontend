import React from "react";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

export default function Content() {
  return (
    <div className="mt-4">
      <CreatePost />
      <Posts />
    </div>
  );
}
