import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrostek = Space_Grotesk({
  subsets: ['latin'],
  variable: "--font-space-grostek",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: "--font-dm-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "ArcheTech | Modern Web, AI & Cloud Solutions",
  description: "One Time Stop for all Problems",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrostek.variable} ${dmSans.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
