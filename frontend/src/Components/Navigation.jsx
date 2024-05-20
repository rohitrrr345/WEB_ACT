import React, { useState, useEffect } from "react";
import {
  ArrowLeftRightIcon,
  BarChart3Icon,
  Clock4Icon,
  LayoutDashboard,
  HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import RightArrowIcon from "./../assets/icons/rightArrow.svg";

const variants = {
  // todo: change expanded to 30% and nonexpanded to %6
  expanded: { width: "220px" },
  nonexpanded: { width: "60px" },
};

const navLinks = [
  {
    link: "/Dashboard",
    text: "Dashboard",
    icon: LayoutDashboard,
    
  },
  {
    link: "/Activity",
    icon: Clock4Icon,
    text: "Activity",
    


  },
  {
    link: "/Analytics",
    icon: BarChart3Icon,
    text: "Analytics",
   


  },
  {
    link: "/Transactions",
    icon: ArrowLeftRightIcon,
    text: "Settings",
   

  },
  {
    link: "/Support",
    icon: HelpCircleIcon,
    text: "support",
    

  },
];

function Navigation() {
  // todo: change to true
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  // screen resize


  return (
    <motion.div
      animate={isExpanded ? "expanded" : "nonexpanded"}
      variants={variants}
      className={
        "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
        (isExpanded ? " px-10" : " px-2 duration-500")
      }
    >
      <div
        onClick={() => setIsExpanded(!isExpanded)}
        className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#ce8888] md:flex hidden justify-center items-center"
      >  
      <img src={RightArrowIcon} alt="" />
      </div>

      <div className=" flex space-x-4 items-center">
        <span className={!isExpanded ? "hidden font-bold"  : "block font-bold"}>Web Acivity Tracker</span>
      </div>

      <div className="flex flex-col space-y-8 mt-12">
        
        {navLinks.map((item,index) => (
           
          <div className="nav-links w-full  cursor-pointer" key={index}>
            <div
              onClick={() => setActiveIndex(index)}
              className={
                "flex space-x-3 w-full p-2 rounded "+
                (activeIndex === index
                  ? "bg-black text-white"
                  : " text-black") +
                (!isExpanded ? " pl-3" : "")
              }
            >
              <item.icon className="md:w-6 w-4" />
              <span className={!isExpanded ? "hidden" : "block"}>
                {item.text}
              </span>
            </div>
          </div>
          
        ))}
 
      </div>
    </motion.div>
  );
}

export default Navigation
