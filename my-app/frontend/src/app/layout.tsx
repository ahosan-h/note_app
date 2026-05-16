import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { SyncUserProvider } from "@/components/sync-user-provider";


import "./globals.css";



export const metadata: Metadata = {
  title: "Notes App",
  description: "Mordern notes application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body>
        <SyncUserProvider>
             {children}
             <Toaster richColors />
        </SyncUserProvider>
      

      </body>
    </html>
    </ClerkProvider>
  );
}
