import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "FocusMe",
  description: "App Pomodoro Gamificado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar></Navbar>
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
