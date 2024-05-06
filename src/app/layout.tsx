import AuthLayout from "@/components/general/auth/AuthLayout";
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
          "bg-linear-primary from-linear-secondary min-h-screen bg-gradient-to-b font-sans text-white antialiased",
          inter.variable
        )}
      >
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
