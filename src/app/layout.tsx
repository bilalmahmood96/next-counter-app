import type { Metadata } from "next";
import "./globals.css";
import { CounterProvider } from "./providers/CounterProvider/CounterProvider";
import { Providers } from "./providers/UIprovider/UIProvider";

export const metadata: Metadata = {
  title: "Next Counter App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <Providers>
          <CounterProvider>{children}</CounterProvider>
        </Providers>
      </body>
    </html>
  );
}
