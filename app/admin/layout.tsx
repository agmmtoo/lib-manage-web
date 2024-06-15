import Link from "next/link";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const items: { name: string; link: string }[] = [
    {
      name: "Dashboard",
      link: "/admin",
    },
    {
      name: "Loans",
      link: "/admin/loans",
    },
    {
      name: "Books",
      link: "/admin/books",
    },
    {
      name: "Users",
      link: "/admin/users",
    },
    {
      name: "Staffs",
      link: "/admin/staffs",
    },
  ];
  return (
    <div className="block w-full">
      <nav className="flex gap-6 items-center">
        {items.map((item) => (
          <Link key={item.link} href={item.link} className="bl">
            {item.name}
          </Link>
        ))}
      </nav>
      <div className=" bg-emerald-200">{children}</div>
    </div>
  );
}
