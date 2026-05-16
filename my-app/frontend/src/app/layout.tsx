import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

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
      <body>{children}

      <Toaster richColors />

      </body>
    </html>
    </ClerkProvider>
  );
}
