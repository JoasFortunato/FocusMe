import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "FocusMe",
  description: "App Pomodoro Gamificado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full overflow-hidden">
      <body className="h-full pt-16 overflow-hidden">
        <Navbar />
        <main className="h-[calc(100vh-4rem)] overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}