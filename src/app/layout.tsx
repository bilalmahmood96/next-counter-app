import type { Metadata } from "next";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { CounterProvider } from "./providers/CounterProvider/CounterProvider";

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
        <ChakraProvider>
          <CounterProvider>{children}</CounterProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
