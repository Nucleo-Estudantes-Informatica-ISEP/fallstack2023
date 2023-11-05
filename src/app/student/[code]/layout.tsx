export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen mx-auto">
      <main>{children}</main>
    </div>
  );
}
