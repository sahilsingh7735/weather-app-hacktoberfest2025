import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "A modern weather application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-hidden">
        <main className="flex-1 overflow-auto">{children}</main>
      </body>
    </html>
  );
}
