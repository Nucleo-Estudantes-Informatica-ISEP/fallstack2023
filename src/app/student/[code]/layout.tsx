export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen w-3/4 justify-center mx-auto bg-fallstack-color-blue">
      <main>{children}</main>
    </div>
  );
}
