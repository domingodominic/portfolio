import Hero from "@/app/sections/Hero";

export default function MainLayout({
  sidebar,
  children,
}: {
  sidebar: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="md:h-screen md:w-screen md:overflow-hidden bg-gray-200 dark:bg-gray-950 md:flex">
      {/* Sidebar */}
      <main className="md:flex-1 border-r p-5">
        <Hero />
        {sidebar}
      </main>

      {/* Main Content */}
      <main className="md:flex-1 overflow-y-auto scroll-smooth dark:bg-gray-950">
        {children}
      </main>
    </div>
  );
}
