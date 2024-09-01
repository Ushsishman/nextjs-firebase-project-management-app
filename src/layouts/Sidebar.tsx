"use client";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Sidebar = () => {
  return (
    <div className="col-span-1 flex">
      <Button variant="outline" className="rounded-full px-5">
        <Link className="flex" href="/">
          <MdOutlineSpaceDashboard size="1.5em" />
          Dashboard
        </Link>
      </Button>
    </div>
  );
};

export default Sidebar;
