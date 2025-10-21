import "./globals.css";
import AuthProvider from "@/components/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const metadata = {
  title: "Weather App",
  description: "A modern weather application",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="overflow-hidden">
        <AuthProvider>
          <main className="flex-1 overflow-auto">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
