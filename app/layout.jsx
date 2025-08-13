import ClientProvider from "./ClientProvider";

export const metadata = {
  title: "Cashmarket",
  icons: {
    icon: "/cashmarket-favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClientProvider>{children}</ClientProvider>
      </body>
    </html>
  );
}
