import { unstable_noStore } from "next/cache";

export default async function Loans({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  unstable_noStore();

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/loans?" +
      new URLSearchParams({
        ...searchParams,
        include: "user,book,staff,library",
      })
  );
  const loans = await res.json();
  console.log(loans);

  return <div>Loans</div>
}
