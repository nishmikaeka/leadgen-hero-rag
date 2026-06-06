import type { Metadata } from "next";
import Script from "next/script";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const revalidate = 86400; // Cache page for 24 hours at edge CDN for 0ms load times

export const metadata: Metadata = {
  title: "Custom RAG Chatbots for Business | Hire an AI Expert",
  description:
    "Stop losing hours digging through internal files. I build hyper-accurate, secure RAG chatbots that integrate exclusively with your PDFs, databases, and Notion. Transform your company data into intelligent, 24/7 answers.",
  keywords: [
    "RAG chatbot developer",
    "custom AI chatbot",
    "retrieval augmented generation",
    "business AI automation",
    "secure AI knowledge base",
    "hire AI developer on Fiverr",
    "ChatGPT for business data",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  authors: [{ name: "Fiverr AI Developer" }],
  openGraph: {
    title: "Custom RAG Chatbots for Business | Zero Hallucinations",
    description:
      "Transform your company data into instant, highly accurate answers. Build a secure RAG chatbot exclusively trained on your internal documentation. Starts at $100.",
    type: "website",
    locale: "en_US",
    siteName: "Custom AI Chatbots",
    images: [
      {
        url: "/logoB.png",
        width: 1200,
        height: 630,
        alt: "Build Custom RAG Chatbots for your business",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom RAG Business Chatbots",
    description:
      "Get instant, hyper-accurate answers grounded exclusively in your secure company knowledge base. Fiverr gig starts at $100.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Pull variables from environment context
  const backendUrl =
    process.env.NEXT_PUBLIC_CHATBOT_BACKEND_URL || "http://localhost:5000";
  const scriptUrl =
    process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL ||
    "http://localhost:5000/widget.js";

  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        {children}

        {/* Dynamic Inline Configuration Script */}
        <Script id="chatbot-config" strategy="afterInteractive">
          {`window.ChatbotConfig = {
            backendUrl: '${backendUrl}',
            primaryColor: '#000000',
            title: 'Assistant',
          };`}
        </Script>

        {/* Dynamic Widget Script Source Injection */}
        <Script src={scriptUrl} strategy="afterInteractive" />
      </body>
    </html>
  );
}
