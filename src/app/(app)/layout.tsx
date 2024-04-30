import { BaseAppLayout } from "@/components/layout/base-app-layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <BaseAppLayout>{children}</BaseAppLayout>;
}
