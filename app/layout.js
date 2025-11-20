import "./globals.css";

export const metadata = {
  title: "FocusMe",
  description: "App Pomodoro Gamificado",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className="h-full">
      <body className="h-full">
        {children}
      </body>
    </html>
  );
}
