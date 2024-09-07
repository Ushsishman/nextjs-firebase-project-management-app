"use client";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { signOut } from "firebase/auth";
import { auth } from "../../firebaseConfig";

const Sidebar = () => {
  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="col-span-1 py-3 flex flex-col justify-between bg-[#424242] text-[#F5F5F5]">
      <div className="flex justify-center">
        <Button variant="outline" className="rounded-full px-5">
          <Link className="flex" href="/">
            <MdOutlineSpaceDashboard size="1.5em" />
            Dashboard
          </Link>
        </Button>
      </div>
      <div className="flex justify-center">
        <Button
          variant="ghost"
          className="text-lg bg-[#48CFCB]"
          onClick={logOut}>
          <CiLogout size="1.2em" className="mr-1" /> Logout
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
