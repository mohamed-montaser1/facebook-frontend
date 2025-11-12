"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import ProfilePicture from "@/public/profile-picture.jpg";
import Container from "./ContentContainer";
import Live from "@/public/live.png";
import Feelings from "@/public/feelings.png";
import Photos from "@/public/photos.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import HeroPicture from "@/public/AC1_hero_desktop.avif";

export default function CreatePost() {
  const [openCreatePostWeidget, setOpenCreatePostWeidget] = useState(false);
  return (
    <div className="create-new-post">
      <Container className="bg-post rounded-xl">
        <div className="create-new-post__main flex items-center gap-3">
          <Image
            src={ProfilePicture}
            alt="profile-picture"
            width={50}
            height={50}
            className="w-[50px] aspect-square rounded-full object-cover"
          />
          <div
            className="bg-[#333334] py-3 px-4 rounded-full flex-1 cursor-pointer hover:bg-[#474748] transition-colors duration-300"
            onClick={() => {
              setOpenCreatePostWeidget(true);
            }}
          >
            <h2 className="text-slate-200">What's on your mind, Mohamed ?</h2>
          </div>
        </div>
        <hr className="text-[#333334] my-2" />
        <div className="create-new-post__footer flex justify-between items-center">
          <NewPostFooterItem icon={Live} title="Live video" />
          <NewPostFooterItem icon={Photos} title="Photo / Video" />
          <NewPostFooterItem icon={Feelings} title="Feeling / Activity" />
        </div>
      </Container>

      {openCreatePostWeidget && (
        <CreatePostWeidget
          setOpenCreatePostWeidget={setOpenCreatePostWeidget}
        />
      )}
    </div>
  );
}

type TCreatePostWeidgetProps = {
  setOpenCreatePostWeidget: React.Dispatch<React.SetStateAction<boolean>>;
};

function CreatePostWeidget({
  setOpenCreatePostWeidget,
}: TCreatePostWeidgetProps) {
  return (
    <section className="Weidget bg-black/40 w-screen h-screen fixed inset-0 z-[100000000000] flex justify-center items-center">
      <Container className="bg-post shadow-2xl rounded-xl overflow-y-scroll scrollbar-hide">
        <header className="overlay__post_header mb-1 sticky top-[-12px] pt-1.5 pb-3 bg-post z-10">
          <div className="flex items-center justify-center">
            <h1 className="text-primary-text flex-1 text-center text-2xl font-semibold">
              Create post
            </h1>
            <button
              className="close__icon bg-secondary/40 rounded-full p-2 cursor-pointer w-8 aspect-square flex justify-center items-center"
              onClick={() => setOpenCreatePostWeidget(false)}
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

        <section className="author__info">
          <div className="flex items-center gap-2">
            <Image
              src={HeroPicture}
              alt="author__image"
              width={40}
              height={40}
              className="rounded-full w-10 h-10 object-cover"
            />
            <div>
              <h3 className="font-semibold text-primary-text">Shahd Ali</h3>
              <span className="font-semibold text-primary-text bg-post/50 py-1 px-2 rounded-md">
                Public
              </span>
            </div>
          </div>
        </section>

        <section className="input">
          <textarea
            name="create_post_textarea"
            className="text-primary-text w-full resize-none outline-none border rounded-lg mt-4 p-2 text-lg min-h-28"
            placeholder="What's on your mind, Shahd ?"
          ></textarea>
        </section>
        <button className="bg-primary-blue text-primary-text w-full py-2 rounded-lg text-xl mt-3 cursor-pointer font-semibold">Post</button>
      </Container>
    </section>
  );
}

type TNewPostFooterItemProps = {
  icon: StaticImageData;
  title: string;
};

function NewPostFooterItem({ icon, title }: TNewPostFooterItemProps) {
  return (
    <div className="create-new-post__footer-item flex items-center justify-center gap-2 p-2 w-[220px] hover:bg-[#3b3d3e] transition-colors rounded-lg cursor-pointer">
      <Image src={icon} alt="live" width={24} height={24} />
      <h3 className="text-[#B0B3B8] font-semibold">{title}</h3>
    </div>
  );
}
