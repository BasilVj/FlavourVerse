import { ReduxProvider } from "@/redux/provider";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Navbar, Footer } from "@/components";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className="font">
        <ReduxProvider>
          <Navbar/>
          {children}
          <Footer/>
          </ReduxProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
