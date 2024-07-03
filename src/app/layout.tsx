import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PrelineScript from "./components/PrelineScript"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "shorebuddy",
  description: "connect with other ocean enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/img/favicon.ico" sizes="any" />
      <body>

        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="https://shorebuddyapp.com/" className="flex items-center space-x-3 rtl:space-x-reverse drop-shadow-xl">
              <img src="/img/logo1.png" className="h-8 drop-shadow-xl" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">shorebuddy</span>
            </a>
          </div>
        </nav>
        {children} 
        </body>
        <PrelineScript />
    </html>
  );
}
