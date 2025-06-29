import { ClerkProvider, SignedIn, SignedOut, SignInButton, SignUpButton } from '@clerk/nextjs';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Clerk Next.js Quickstart',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          {/* Only render the header if the user is signed out */}
          <SignedOut>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <SignInButton />
              <SignUpButton />
            </header>
          </SignedOut>
          {/* Render the children regardless of signed-in status */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
