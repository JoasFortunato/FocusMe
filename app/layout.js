import "./globals.css";

export const metadata = {
  title: "FocusMe",
  description: "App de estudo gamificado com método Pomodoro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}