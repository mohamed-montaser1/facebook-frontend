import React, { HTMLProps } from "react";

type TContentContainerProps = {
  children: React.ReactNode;
} & HTMLProps<HTMLDivElement>;

export default function Container({
  children,
  ...props
}: TContentContainerProps) {
  return (
    <div
      {...props}
      className={`container p-3 md:px-3 lg:px-4 md:w-[680px] w-fit mx-auto ${props.className}`}
    >
      {children}
    </div>
  );
}
