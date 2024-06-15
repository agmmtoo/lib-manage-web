import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { unstable_noStore } from "next/cache";

export default async function Books({
  searchParams,
}: {
  searchParams: { query: string; page: string };
}) {
  unstable_noStore();

  const res = await fetch(
    process.env.NEXT_PUBLIC_API_URL +
      "/books?" +
      new URLSearchParams(searchParams)
  );
  const books = await res.json();

  return (
    <div>
      <h2 className="font-medium text-2xl">Books</h2>
      <Separator className="my-4" />
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {books.data.map((book: any) => (
          <Card key={book.id} title={book.title} className="">
            <CardHeader>{book.title}</CardHeader>
            <CardContent>{book.author}</CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
