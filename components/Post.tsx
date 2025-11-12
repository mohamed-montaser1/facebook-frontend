"use client";

import Image from "next/image";
import Hero_Picture from "@/public/AC1_hero_desktop.avif";
import dayjs from "@/lib/dayjs";
import Love from "@/public/love-react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faClose, faShare } from "@fortawesome/free-solid-svg-icons";
import Container from "./ContentContainer";
import { useState } from "react";

export type TPost = {
  _id: string;
  author: string /* should be replaces with --> TUser */;
  content: string;
  images: string[]; // URLs of images
  timestamp: Date;
  statics: {
    likes: string;
    comments: string;
    shares: string;
  };
  comments: TComment[];
};

export type TComment = {
  author: string /* should be replaces with --> TUser */;
  content: string;
  timestamp: Date;
  likes: number;
  replyTo: TComment | null;
};

type TProps = {
  post: TPost;
};

type TPostWithoutCommentsProps = TProps & {
  openCommentSection?: boolean;
  setOpenCommentSection?: React.Dispatch<React.SetStateAction<boolean>>;
  functionalCommentButton: boolean;
};

export function PostWithoutComments({
  post,
  openCommentSection = false,
  setOpenCommentSection = () => {},
  functionalCommentButton = false,
}: TPostWithoutCommentsProps) {
  const grid_cols_rows =
    post.images.length === 1
      ? "grid-cols-1 grid-rows-1"
      : "grid-cols-2 grid-rows-2";
  return (
    <>
      <div className="header author-section">
        <section className="author flex gap-3 items-center">
          <Image
            src={Hero_Picture}
            width={40}
            height={40}
            className="rounded-full w-10 aspect-square object-cover"
            alt={"author pic"}
          />
          <div className="author__info">
            <h3 className="text-slate-200 text-lg font-bold">{post.author}</h3>
            <span className="text-slate-100">
              {dayjs(post.timestamp).fromNow()}
            </span>
          </div>
        </section>
      </div>
      <section className="post__content">
        <p className="post__text text-primary-text text-xl mb-4 mt-1">
          {post.content}
        </p>

        <div className={`grid ${grid_cols_rows} gap-0.5 w-full h-96`}>
          {post.images.length > 0 &&
            post.images.map((image, i) => (
              <div
                key={i}
                className={`relative ${
                  i === 2 && post.images.length === 3 && "col-span-2"
                }`}
              >
                <Image
                  src={image}
                  fill
                  className={`object-cover`}
                  alt={`post_image_${i}`}
                />

                {i === 3 && post.images.length > 4 && (
                  <div className="w-full h-full bg-secondary opacity-80 text-black font-bold text-5xl flex justify-center items-center">
                    +{post.images.length - 4}
                  </div>
                )}
              </div>
            ))}
        </div>
      </section>
      <section className="post__statics">
        <div className="reacts flex justify-between items-center mt-2">
          <div className="reacts__likes flex items-center gap-1">
            <Image src={Love} alt="love-reacts" />
            <span className="text-secondary">{post.statics.likes}</span>
          </div>

          <div className="reacts__comments-shares flex gap-4">
            <span className="text-secondary text-sm">
              {post.statics.shares} comments
            </span>
            <span className="text-secondary text-sm">
              {post.statics.shares} shares
            </span>
          </div>
        </div>
      </section>

      <section className="post__controls mt-4 grid grid-cols-3 place-items-center">
        <button className="post__controls-btn">
          <FontAwesomeIcon icon={faHeart} width={25} color="#b0b3b8" />
          <span className="text-secondary">Like</span>
        </button>
        <button
          className="post__controls-btn"
          onClick={() =>
            functionalCommentButton &&
            setOpenCommentSection(!openCommentSection)
          }
        >
          <FontAwesomeIcon icon={faComment} width={25} color="#b0b3b8" />
          <span className="text-secondary">Comment</span>
        </button>
        <button className="post__controls-btn">
          <FontAwesomeIcon icon={faShare} width={25} color="#b0b3b8" />
          <span className="text-secondary">Share</span>
        </button>
      </section>
    </>
  );
}

type TCommentProps = {
  comment: TComment;
};

function Comment({ comment }: TCommentProps) {
  return (
    <div className="comment__container my-4">
      <div className="comment__author-and-content flex gap-3">
        <Image
          src={Hero_Picture}
          alt="author__image"
          className="rounded-full w-8 h-8 object-cover border-2 border-secondary"
        />
        <div className="comment__body flex-1 mr-4">
          <div className="comment__content bg-comment rounded-xl py-1.5 px-3">
            <div className="flex flex-col gap-0.5">
              <h3 className="text-primary-text text-[13px]">
                {comment.author}
              </h3>
              <p className="text-primary-text text-[15px]">{comment.content}</p>
            </div>
          </div>
          <div className="comment__body__controls flex items-center justify-between mt-1">
            <div className="comment__body__controls px-2 flex">
              <span className="text-secondary text-sm">
                {dayjs(comment.timestamp).fromNow() === "a few seconds ago"
                  ? "Just now"
                  : dayjs(comment.timestamp).fromNow()}
              </span>
              <div className="flex gap-2">
                <button className="text-secondary text-sm ml-2 cursor-pointer font-semibold">
                  Like
                </button>
                <button className="text-secondary text-sm cursor-pointer">
                  Reply
                </button>
              </div>
            </div>
            <span className="text-secondary">
              {comment.likes}
              <FontAwesomeIcon icon={faHeart} width={25} height={25} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Post({ post }: TProps) {
  const [openCommentSection, setOpenCommentSection] = useState<boolean>(false);
  return (
    <div className="post my-9 bg-post rounded-xl">
      <Container key={post._id}>
        <PostWithoutComments
          post={post}
          openCommentSection={openCommentSection}
          setOpenCommentSection={setOpenCommentSection}
          functionalCommentButton={true}
        />
        {openCommentSection && (
          <section className="overlay__post fixed h-screen w-screen top-0 left-0 bg-black/45 z-[100000000000] flex justify-center items-center">
            <Container
              className="bg-post shadow-2xl rounded-xl overflow-y-scroll scrollbar-hide"
              style={{ height: "calc(100vh - 4.5rem)" }}
            >
              <header className="overlay__post_header mb-1 sticky top-[-12px] pt-1.5 pb-3 bg-post z-10">
                <div className="flex items-center justify-center">
                  <h1 className="text-primary-text flex-1 text-center text-2xl font-semibold">
                    {post.author}'s post
                  </h1>
                  <button
                    className="close__icon bg-secondary/40 rounded-full p-2 cursor-pointer w-8 aspect-square flex justify-center items-center"
                    onClick={() => setOpenCommentSection(false)}
                  >
                    <FontAwesomeIcon
                      icon={faClose}
                      color="#e2e5e9"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
                <hr className="w-full text-secondary mt-3" />
              </header>
              <PostWithoutComments
                post={post}
                functionalCommentButton={false}
              />

              <div className="overlay__post_comments_section">
                {post.comments.map((comment, i) => (
                  <Comment comment={comment} key={i} />
                ))}
              </div>
            </Container>
          </section>
        )}
      </Container>
    </div>
  );
}
