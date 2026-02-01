"use client";

import NavItems from "@/app/ui/NavItems";

export default function Sidebar() {
  return (
    <nav className="md:p-6 space-y-2 hidden md:block ">
      <NavItems />
    </nav>
  );
}
