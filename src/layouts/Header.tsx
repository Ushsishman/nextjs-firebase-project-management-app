"use client";
import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

const Header = ({ currentPage }: { currentPage: string }) => {
  return (
    <div className="bg-[#333333] h-20 px-4 flex flex-row justify-between items-center">
      <div>
        <h1 className="text-xl text-[#f5f5f5]">{currentPage}</h1>
      </div>
      <div>
        <Button
          className="rounded-full h-12 w-12 bg-[#48CFCB]"
          variant="outline"
          size="icon">
          <FaPlus size="1.5em" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
