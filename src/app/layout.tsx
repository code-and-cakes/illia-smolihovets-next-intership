import AuthLayout from "@/components/general/AuthLayout";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={cn(
          "h-screen min-h-full bg-background bg-blue-900 font-sans antialiased",
          inter.variable
        )}
      >
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
