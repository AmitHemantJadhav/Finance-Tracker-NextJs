import React from "react";
import { ImStatsBars } from "react-icons/im";
import Image from "next/image";

export const Navigation = () => {
  return (
    <header className="container max-w-2xl px-6 py-6 mx-auto">
      <div className="flex items-center justify-between">
        {/* User information */}
        <div className="flex items-center gap-2">
          {/* img */}
          <div className="h-[40px] w-[40px] rounded-full overflow-hidden">
            <Image
              src="https://thispersondoesnotexist.com"
              className="object-cover w-full h-full"
              alt="Profile image"
              width={40}
              height={40}
            />
          </div>

          {/* name */}
          <small>Hi, Leon!</small>
        </div>

        {/* Right side of our navigation */}
        <nav className="flex items-center gap-2">
          <div>
            <ImStatsBars className="text-2xl" />
          </div>
          <div>
            <button className="btn btn-danger">Sign out</button>
          </div>
        </nav>
      </div>
    </header>
  );
};
