import React from "react";
import Logo from "@/public/logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faChevronDown,
  faEllipsis,
  faGamepad,
  faHome,
  faSearch,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import ProfilePicture from "@/public/profile-picture.jpg";

export default function Navbar() {
  return (
    <nav className="flex p-4 gap-3 justify-between items-center h-[56px] bg-[#252728] sticky top-0 z-[10000000000]">
      <div className="flex items-center gap-2 justify-center">
        <Logo />
        <SearchBar />
      </div>
      <NavbarItems />
      <Toolbar />
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="flex items-center justify-center p-3 gap-2 w-fit max-w-[240px] h-[40px] bg-[#333334] rounded-full">
      <FontAwesomeIcon
        icon={faSearch}
        className="text-[#E2E5E9] w-[16px] aspect-square h-[40px] lg:ml-1.5"
      />
      <input
        type="text"
        placeholder="Search Facebook"
        className="hidden lg:block w-full h-[40px] bg-transparent outline-none text-[#E2E5E9]"
        name="search"
      />
    </div>
  );
}

const navbarItems: INavbarItemProps[] = [
  {
    icon: faHome,
    title: "Home",
    active: true,
  },
  {
    icon: faVideo,
    title: "Videos",
    active: false,
  },
  {
    icon: faUsers,
    title: "Groups",
    active: false,
  },
  {
    icon: faGamepad,
    title: "Games",
    active: false,
  },
];

function NavbarItems() {
  return (
    <div className="hidden md:flex justify-center items-center gap-3">
      {navbarItems.map((el, i) => {
        return (
          <NavbarItem
            key={i}
            icon={el.icon}
            title={el.title}
            active={el.active}
          />
        );
      })}
    </div>
  );
}

type INavbarItemProps = {
  icon: IconProp;
  title: string;
  active: boolean;
};

function NavbarItem({ icon, title, active }: INavbarItemProps) {
  return (
    <div
      title={title}
      className={`w-fit p-5 lg:w-[130px] h-[45px] rounded-lg cursor-pointer hover:bg-hover transition flex items-center justify-center ${
        active ? "navbar-item__active" : ""
      }`}
    >
      <FontAwesomeIcon
        icon={icon}
        className={`w-[20px] aspect-square ${
          active ? "text-[#007AFF]" : "text-[#E2E5E9]"
        }`}
      />
    </div>
  );
}

type IToolbarItemProps = {
  icon: IconProp;
};

const toolbarItems: IToolbarItemProps[] = [
  {
    icon: faEllipsis,
  },
  {
    icon: faFacebookMessenger,
  },
  {
    icon: faBell,
  },
];

function Toolbar() {
  return (
    <div className="flex items-center gap-3">
      {toolbarItems.map((el, i) => (
        <div
          key={i}
          className="bg-[#3b3d3e] rounded-full w-[40px] aspect-square flex items-center justify-center cursor-pointer hover:bg-[#4a4c4d] transition"
        >
          <FontAwesomeIcon
            key={i}
            icon={el.icon}
            className="w-[18px] aspect-square text-[#E2E5E9]"
          />
        </div>
      ))}
      <div className="profile cursor-pointer rounded-full relative">
        <Image
          src={ProfilePicture}
          alt="profile-picture"
          width={40}
          height={40}
          className="rounded-full w-[40px] aspect-square object-cover"
        />
        <div className="absolute bottom-0 right-0 z-100 bg-[#3b3d3e] rounded-full w-[14px] aspect-square flex items-center justify-center">
          <FontAwesomeIcon
            icon={faChevronDown}
            className="w-[10px] aspect-square text-[#E2E5E9]"
          />
        </div>
      </div>
    </div>
  );
}
