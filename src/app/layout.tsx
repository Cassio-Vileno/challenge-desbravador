import { InfoContextProvider } from "@/contexts/InfoContext";
import "./globals.css";
import { Saira } from "next/font/google";

const saira = Saira({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <InfoContextProvider>
        <body className={saira.className}>{children}</body>
      </InfoContextProvider>
    </html>
  );
}
