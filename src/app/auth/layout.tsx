import AuthLayout from "@/components/general/auth/AuthLayout";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body
        className={cn(
          "min-h-screen bg-linear-primary bg-gradient-to-b from-linear-secondary font-sans text-white antialiased",
          inter.variable
        )}
      >
        <AuthLayout>{children}</AuthLayout>
      </body>
    </html>
  );
}
