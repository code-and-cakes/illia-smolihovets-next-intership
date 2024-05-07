import AppLayout from "@/components/general/app/AppLayout";
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
      <body className={cn("font-sans antialiased", inter.variable)}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
