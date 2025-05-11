import Loading from '@/app/loading';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { Suspense } from 'react';

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootProvider({ children }: RootLayoutProps) {
  return (
    <Suspense fallback={<Loading />}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </NextThemesProvider>
    </Suspense>
  );
}
