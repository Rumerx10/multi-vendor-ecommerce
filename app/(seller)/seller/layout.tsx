
import SearchBar from "@/components/shared/SearchBar";
import Sidebar from "@/components/shared/Sidebar";
import type { Metadata } from "next";
import React, { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ecom | Dashboard",
  description: "Seller Dashboard.",
};

export default function SellerLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex flex-col w-full items-center justify-center">
      <SearchBar />
      <div className="flex flex-col w-full lg:container mx-auto px-4">
        <div className="flex w-full gap-5 min-h-screen">
          <div className="relative w-3/12">
            <Sidebar />
          </div>
          <div className="w-9/12 py-5">
            {children}
          </div>
        </div>        
      </div>
    </main>
  );
}