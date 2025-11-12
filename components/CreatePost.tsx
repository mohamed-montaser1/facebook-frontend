import Image, { StaticImageData } from "next/image";
import React from "react";
import ProfilePicture from "@/public/profile-picture.jpg";
import Container from "./ContentContainer";
import Live from "@/public/live.png";
import Feelings from "@/public/feelings.png";
import Photos from "@/public/photos.png";

export default function CreatePost() {
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
          <div className="bg-[#333334] py-3 px-4 rounded-full flex-1 cursor-pointer hover:bg-[#474748] transition-colors duration-300">
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
    </div>
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
