import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../../components/Button";
import slack from "../../../assets/Images/slack.svg"
import Discord from "../../../assets/Images/Discord.svg"
import Stripe from "../../../assets/Images/stripe.svg"
import figma from "../../../assets/Images/figma.svg"
import openAI from "../../../assets/Images/openAI.svg"
import retool from "../../../assets/Images/retool.svg"


const Header = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <header className="h-[100svh]">
      <nav className="flex items-center justify-between h-[7%] px-20">
        <div>
          <h1 className="font-[neuton-800] text-[1.5rem]">Compound</h1>
        </div>
        <ul className="flex items-center gap-5">
          <NavLink to="#">Membership</NavLink>
          <NavLink to="#">Resources</NavLink>
          <NavLink to="#">Company</NavLink>
        </ul>
        <div className="flex item_center gap-5">
          <button>sign in</button>
          <Button type="default">Get started</Button>
        </div>
      </nav>
      <section className="p-36  h-[93%]  ">
        <h1 className={`text-black text-[3.5rem] ${
            !isHovered ? "blur-sm" : "blur-0"
        } hover:transition-all`}
        onMouseOver={()=> setIsHovered(true)}
        onMouseLeave={() => setIsHovered(true)}>We focus on your finances</h1>
        <h1 className={`text-black text-[3.5rem] ${
            isHovered ? "blur-sm" : "blur-0"
        } hover:transition-all`}
        onMouseOver={()=> setIsHovered(false)}
        onMouseLeave={() => setIsHovered(false)} >you focus on what matters the most</h1>
        <div className="flex items-center gap-7 mt-10">
        <Button type="default">Get started</Button>
          <Button type="Primary">Learn more</Button>
        </div>
        <div className="mt-40 flex gap-[1rem]">
            <div><h1 className="font-light">wealth management for people <br /> from leading tech companies</h1></div>
            <div className="flex gap-[1.5rem] w-s-[70%]">
                <img src={slack} alt="" />
                <img src={Discord} alt="" />
                <img src={Stripe} alt="" />
                <img src={figma} alt="" />
                <img src={openAI} alt="" />
                <img src={retool} alt="" />
            </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
