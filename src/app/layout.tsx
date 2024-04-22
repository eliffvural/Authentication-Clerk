import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from './components/Navbar';
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <div className='mx-36 text-2xl' >
        <Navbar/>
          <div className='flex flex-col items-center text-center mt-32' >
            
         {children}
        </div>
        </div>
        
        </body>
    </html>
    </ClerkProvider>
  );
}
