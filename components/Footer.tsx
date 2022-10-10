import Link from "next/link";
import React from "react";
import { RiGithubFill, RiLinkedinFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <div
      style={{ height: "7vh" }}
      className="px-10 flex items-center justify-center "
    >
      <ul className="flex text-center ">
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://github.com/philippetedajo">
            <a target="_blank" rel="noreferrer noopener">
              <RiGithubFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </p>
        <p className="mr-2.5 lg:mr-10 cursor-pointer">
          <Link href="https://www.linkedin.com/">
            <a target="_blank" rel="noreferrer noopener">
              <RiLinkedinFill size={20} className="hover:text-third" />
            </a>
          </Link>
        </p>
      </ul>
    </div>
  );
};
