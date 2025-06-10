"use client";

import React, { useState } from "react";
import LogoSvg from "../svg/LogoSvg";
import { Globe, HelpCircle, Bell, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [languageOpen, setLanguageOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [language, setLanguage] = useState("EN");

  const toggleLanguageMenu = () => {
    setProfileOpen(false);
    setLanguageOpen((prev) => !prev);
  };

  const toggleProfileMenu = () => {
    setLanguageOpen(false);
    setProfileOpen((prev) => !prev);
  };

  const handleLanguage = (lang: string) => {
    setLanguage(lang);
    setLanguageOpen(false);
  };

  return (
    <div className="flex flex-col w-full items-center justify-center">
      <section className="lg:container flex items-center justify-between px-4 mx-auto h-24 py-7 relative">
        <h1>
          <LogoSvg />
        </h1>
        <div>
          <div className="flex items-center space-x-10 relative">
            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={toggleLanguageMenu}
                className="flex gap-2 items-center text-gray-600 hover:text-gray-800"
              >
                <Globe className="w-5 h-5 mr-1" />
                <p>{language}</p>
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>

              {languageOpen && (
                <ul className="absolute top-10 left-0 bg-white border border-borderGray rounded-lg p-1 shadow-md z-50 w-auto">
                  <div
                    onClick={() => handleLanguage("EN")}
                    className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    English
                  </div>
                  <div
                    onClick={() => handleLanguage("BN")}
                    className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    Bangla
                  </div>
                  <div
                    onClick={() => handleLanguage("FR")}
                    className="px-4 py-1 hover:bg-gray-100 cursor-pointer"
                  >
                    French
                  </div>
                </ul>
              )}
            </div>

            {/* Help */}
            <button className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <HelpCircle className="w-6 h-6" />
              <p>Help</p>
            </button>

            {/* Notifications */}
            <button className="relative text-gray-600 hover:text-gray-800 border border-borderGray rounded-lg p-2">
              <Bell className="w-6 h-6" />
              <span className="absolute flex items-center justify-center font-medium text-[10px] text-white -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full">
                3
              </span>
            </button>

            {/* User Profile */}
            <div className="relative">
              <div
                className="flex items-center cursor-pointer"
                onClick={toggleProfileMenu}
              >
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                  JD
                </div>
                <div className="flex items-center gap-1">
                  <div className="ml-3 font-semibold text-gray-700">
                    John Doe
                  </div>
                  <ChevronDown className="w-4 h-4 ml-1" />
                </div>
              </div>

              {profileOpen && (
                <ul className="absolute top-12 right-0 bg-white border border-borderGray rounded-lg p-1 shadow-md z-50 w-40">
                  <div onClick={()=>setProfileOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Profile
                  </div>
                  <div onClick={()=>setProfileOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Settings
                  </div>
                  <div onClick={()=>setProfileOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </div>
                </ul>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
