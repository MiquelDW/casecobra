import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { cn, constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = constructMetadata();

// Root Layout Component wraps around all files inside the application
// it ensures a consistent layout for all pages and routes within the application
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />

        {/* min-height will be: 100vh - NavBar height - 1px */}
        <main className="grainy-light flex min-h-[calc(100vh-3.5rem-1px)] flex-col">
          <div className="flex h-full flex-1 flex-col">
            {/* wrap entire application with context provider component to use  React Query */}
            <Providers>{children}</Providers>
          </div>
          <Footer />
        </main>

        {/* render the 'Toaster' component and display when needed */}
        <Toaster />
      </body>
    </html>
  );
}
