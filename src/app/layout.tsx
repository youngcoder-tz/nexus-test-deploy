import type { Metadata } from "next";
import localFont from "next/font/local";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getSiteSchema } from "../lib/getData";
import { NexusProviderWrapper } from "@/providers/NexusProviderWrapper";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export async function generateMetadata(): Promise<Metadata> {
  const { config } = await getSiteSchema();
  return {
    title: config.seo.defaultTitle,
    description: config.seo.defaultDescription,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { config, navigation } = await getSiteSchema();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#050505] text-white antialiased`}
      >
        <NexusProviderWrapper>
          {/* INJECT BRANDING VARIABLES */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
          :root {
            --primary: ${config.branding.primaryColor};
            --secondary: ${config.branding.secondaryColor};
            --accent: ${config.branding.accentColor};
            --radius-lg: ${config.branding.borderRadius.lg};
            --radius-xl: ${config.branding.borderRadius.xl};
          }
        `,
            }}
          />

          <Navbar nav={navigation.main} config={config} />
          <main>{children}</main>
          <Footer footer={navigation.footer} config={config} />
        </NexusProviderWrapper>
      </body>
    </html>
  );
}
