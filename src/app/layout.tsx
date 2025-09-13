import "./globals.css";
import Providers from "./Providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"layoutWrapper"}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
