import { LandingCard } from "@/components/landing/Card";
import { unstable_noStore } from "next/cache";

export default async function StatCards() {
  unstable_noStore();

  //   await new Promise((r) => setTimeout(r, 3000))
  const res = await fetch("http://localhost:8080/api/v1/public");
  const stats = await res.json();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-2/3 md:1/2 gap-2">
      <LandingCard count={stats.books} type="books" link="books" />
      <LandingCard count={stats.libraries} type="libraries" link="libraries" />
      <LandingCard count={stats.users} type="users" link="users" />
      <LandingCard count={stats.staffs} type="staffs" link="staffs" />
    </div>
  );
}
