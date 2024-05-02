import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-violet-300 pt-40 text-center">
      <div className="flex-auto text-center">
        <div className="">Test Projest based on Linear app</div>
        <div className="">
          Meet the new standard for modern software development. Streamline
          issues, sprints, and product roadmaps.
        </div>
        <Link href="/#">
          <button className="bg-blue-600">Get started</button>
        </Link>
      </div>
      <div className="">Illia Smolihovets 2024</div>
    </div>
  );
}

//background-color: #025b8c;
//background-image: linear-gradient(180deg, #025b8c 40%, #05016b 100%);
