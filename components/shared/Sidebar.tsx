"use client";
import Link from "next/link";
import React from "react";
import { FiBox } from "react-icons/fi";
import { LuShoppingCart, LuCreditCard, LuSettings } from "react-icons/lu";
import { CgHome } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

  const menuItems = [
    { label: "Overview", icon: CgHome, href: "/seller" },
    { label: "Products", icon: FiBox, href: "/seller/products" },
    { label: "Orders", icon: LuShoppingCart, href: "/seller/orders" },
    { label: "Payments", icon: LuCreditCard, href: "/seller/payments" },
    { label: "Settings", icon: LuSettings, href: "/seller/settings" },
  ];

  return (
    <aside className="flex flex-col gap-2 w-full h-full border-r border-red-700 py-5 pr-4">
      {menuItems.map(({ label, icon: Icon, href }) => {
        const isActive = path === href;
        return (
          <Link
            key={label}
            href={href}
            className={`group flex items-center font-medium w-full gap-3 py-4 px-3 rounded-lg duration-300 ${
              isActive ? "bg-liteRed text-tomato" : "hover:bg-liteRed"
            }`}
          >
            <Icon size={24} className={`${isActive} && 'text-tomato'`} />
            <span>{label}</span>
          </Link>
        );
      })}
    </aside>
  );
};

export default Sidebar;
