import Hero from "@/components/hero/Hero";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="overflow-hidden">
            <div className="2xl:pl-40 lg:pl-32 pl-6">
              <Hero locale={locale} />
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
