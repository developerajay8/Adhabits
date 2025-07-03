import { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script"; // ✅ import Script for external JS

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdHabits - Professional Meta Ads for Affiliate Marketers",
  description:
    "Let us run your Meta ads and get you more leads professionally. 3+ years experience, 250+ affiliates served.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Meta Pixel Script */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '905585234905857');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        {children} 
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=905585234905857&ev=PageView&noscript=1"
          />
        </noscript>
        </body>
    </html>
  );
}
