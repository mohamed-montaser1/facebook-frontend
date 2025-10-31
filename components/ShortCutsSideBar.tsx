import React from "react";
import ProfilePicture from "@/public/profile-picture.jpg";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ShortCutsSideBar() {
  return (
    <div className="shortcuts-sidebar pt-4 h-[calc(100vh_-_56px)] px-3 relative">
      <div className="shortcuts mb-3">
        <Shortcut
          image={ProfilePicture}
          title="Mohamed Montaser"
          link="/profile"
        />
        <Shortcut position={-333} title="Friends" link="/friends" />
        <Shortcut position={-481} title="Memories" link="/friends" />
        <Shortcut position={-222} title="Saved" link="/friends" />
        <Shortcut position={-74} title="Groups" link="/friends" />
        <Shortcut position={-555} title="Video" link="/friends" />
        <Shortcut position={-37} title="Reels" link="/friends" />
      </div>
      <hr className="text-slate-200" />
      <div className="shortcuts-sidebar__groups-section">
        <span className="text-gray-400 font-bold inline-block mt-2">
          Your shortcuts
        </span>
        <div className="groups">
          <Shortcut
            image={ProfilePicture}
            title="Learn how to play chess"
            link="/groups/group1"
          />
          <Shortcut
            image={ProfilePicture}
            title="Assassin's creed lovers"
            link="/groups/group2"
          />
          <Shortcut
            image={ProfilePicture}
            title="مليون مبرمج مصري"
            link="/groups/group3"
          />
          <Shortcut
            image={ProfilePicture}
            title="Node.js Developers"
            link="/groups/group4"
          />
          <Shortcut
            image={ProfilePicture}
            title="Typescript is the best by test"
            link="/groups/group5"
          />
        </div>
      </div>
    </div>
  );
}

type IShortcutProps = {
  position?: number; // the position of the icon in the tall image
  image?: string | StaticImageData;
  title: string;
  link: string;
};

function Shortcut({ position, image, title, link }: IShortcutProps) {
  return (
    <Link
      href={link}
      className="flex items-center gap-2 hover:bg-[#3b3d3e] transition-colors duration-300 rounded-md w-full px-2 py-2"
    >
      {isNaN(position as number) ? (
        <Image
          src={image as string}
          alt={title}
          width={36}
          height={36}
          className="rounded-full w-[36px] aspect-square object-cover"
        />
      ) : (
        <div
          className={`bg-[url('/sidebar-icons.png')] w-[36px] aspect-square bg-auto bg-no-repeat inline-block`}
          style={{ backgroundPosition: `0px ${position}px` }}
        />
      )}
      <span className="text-slate-200 text-base font-semibold">{title}</span>
    </Link>
  );
}
