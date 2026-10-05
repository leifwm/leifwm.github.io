import { Navbar } from "@/components/navbar";
import { SiteFooter } from "@/components/site-footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-[1920px]  grow bg-background">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
