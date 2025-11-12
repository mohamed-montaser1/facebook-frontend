import Image from "next/image";
import Hero_Picture from "@/public/AC1_hero_desktop.avif";
import dayjs from "@/lib/dayjs";
import Love from "@/public/love-react.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import Container from "./ContentContainer";

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

export default function Post({ post }: TProps) {
  const grid_cols_rows =
    post.images.length === 1
      ? "grid-cols-1 grid-rows-1"
      : "grid-cols-2 grid-rows-2";

  return (
    <div className="post my-9 bg-post rounded-xl">
      <Container key={post._id}>
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
              <h3 className="text-slate-200 text-lg font-bold">
                {post.author}
              </h3>
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
          <div className="post__controls-btn">
            <FontAwesomeIcon icon={faHeart} width={25} color="#b0b3b8" />
            <span className="text-secondary">Like</span>
          </div>
          <div className="post__controls-btn">
            <FontAwesomeIcon icon={faComment} width={25} color="#b0b3b8" />
            <span className="text-secondary">Comment</span>
          </div>
          <div className="post__controls-btn">
            <FontAwesomeIcon icon={faShare} width={25} color="#b0b3b8" />
            <span className="text-secondary">Share</span>
          </div>
        </section>
      </Container>
    </div>
  );
}
