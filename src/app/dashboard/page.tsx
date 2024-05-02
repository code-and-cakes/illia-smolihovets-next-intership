import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col">
      <div>Dashboard Page</div>
      <div>
        <Link href="/dashboard/child1">child 1</Link>
        <Link href="/dashboard/child2">child 2</Link>
      </div>
    </div>
  );
}
