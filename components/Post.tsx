import Image from "next/image";
import Hero_Picture from "@/public/AC1_hero_desktop.avif";
import dayjs from "@/lib/dayjs";

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

        <section className="post__content">
          <p className="post__text text-slate-300 text-xl mb-4 mt-1">
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
                    <div className="w-full h-full bg-slate-400 opacity-80 text-black font-bold text-5xl flex justify-center items-center">
                      +{post.images.length - 4}
                    </div>
                  )}
                </div>
              ))}
          </div>
        </section>
      </div>
    </>
  );
}
