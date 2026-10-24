import "./globals.css";

export const metadata = { title: "Twitch Builds a Game" };
export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0e0e10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
