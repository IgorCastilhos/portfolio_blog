import "../global.css";
import {Inter} from "@next/font/google";
import LocalFont from "@next/font/local";
import {Metadata} from "next";
import {Analytics} from "./components/analytics";

export const metadata: Metadata = {
    title: {
        default: "igorcastilhos.com",
        template: "%s | igorcastilhos.com",
    },
    description: "Full-Stack Developer",
    openGraph: {
        title: "igorcastilhos.com",
        description: "Full-Stack Developer",
        url: "https://igorcastilhos.com",
        siteName: "igorcastilhos.com",
        images: [
            {
                url: "https://github.com/IgorCastilhos.png",
                width: 1920,
                height: 1080,
            },
        ],
        locale: "pt-BR",
        type: "website",
    },
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
    twitter: {
        title: "Igor",
        card: "summary_large_image",
    },
    icons: {
        shortcut: "/favicon.ico",
    },
};
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
});

const calSans = LocalFont({
    src: "../public/fonts/CalSans-SemiBold.ttf",
    variable: "--font-calsans",
});

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
        <head>
            <Analytics/>
        </head>
        <body
            className={`bg-black ${
                process.env.NODE_ENV === "development" ? "debug-screens" : undefined
            }`}
        >
        {children}
        </body>
        </html>
    );
}
