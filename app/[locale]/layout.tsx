import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export const metadata: Metadata = {
  title: {default: "TRAVELLING WEBSITE",
    template: "%s - TRAVEL WEBSITE"
  },
  description: "Travel with us",
};

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
              {/* <Hero locale={locale} /> */}
              <Hero locale={locale} />
              {children}
            </div>
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
