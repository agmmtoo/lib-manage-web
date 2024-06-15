import StatCards from "@/components/landing/StatCards";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-around w-full">
      <h1 className="text-4xl font-semibold ">Welcome!</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <StatCards />
      </Suspense>
      <Link className=" uppercase font-medium hover:underline" href="/books">
        Join now
      </Link>
    </div>
  );
}
