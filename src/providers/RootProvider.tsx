import { ThemeProvider as NextThemesProvider } from 'next-themes';

type RootLayoutProps = {
  children: React.ReactNode;
};

export function RootProvider({ children }: RootLayoutProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
