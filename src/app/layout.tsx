import type { Metadata } from "next";
import { Red_Hat_Display, Roboto_Condensed } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { AuthProvider } from "@/lib/AuthContext";
import { CartProvider } from "@/lib/CartContext";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-display",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "LiveGood - Premium Health Supplements",
  description: "With a commitment to helping people, LiveGood brings you the most advanced nutritional supplements on the market, made with only the purest, highest quality, results-driven ingredients on the planet, without the expensive pricing mark-ups of other companies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${redHatDisplay.variable} ${robotoCondensed.variable}`}>
      <ClientBody>
        <AuthProvider>
          <CartProvider>
            {children}
          </CartProvider>
        </AuthProvider>
      </ClientBody>
    </html>
  );
}
