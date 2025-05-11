import { Button } from '@/components/ui/button';
import { SignInButton } from '@clerk/nextjs';
import { auth } from '@clerk/nextjs/server';
import { ArrowRight, BarChart3, LineChart, PieChart } from 'lucide-react';
import { redirect } from 'next/navigation';

const LoginPage = async () => {
  const { userId } = await auth();

  if (userId) {
    redirect('/');
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      <div className="flex flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-md">
          <div className="flex items-center justify-center">
            <BarChart3 className="h-10 w-10 text-emerald-600" />
            <h1 className="ml-2 text-3xl font-bold text-emerald-600">
              Finance.ai
            </h1>
          </div>
          <h2 className="mt-6 text-white text-center text-2xl font-bold leading-9 tracking-tight dark:text-gray-900">
            Controle financeiro inteligente
          </h2>
          <p className="mt-2  text-center text-sm text-gray-600">
            Gerencie suas finanças com o poder da inteligência artificial.
            Obtenha insights, previsões e recomendações personalizadas.
          </p>
          <div className="mt-10">
            <SignInButton mode="modal">
              <Button className="w-full">
                Entrar
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </SignInButton>
            <p className="mt-6 text-center text-sm text-gray-500">
              Ao entrar, você concorda com nossos{' '}
              <a
                href="#"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Termos de Serviço
              </a>{' '}
              e{' '}
              <a
                href="#"
                className="font-medium text-emerald-600 hover:text-emerald-500"
              >
                Política de Privacidade
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden flex-1 bg-emerald-50 lg:block">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8">
              <div className="relative h-full w-full">
                <div className="absolute -bottom-4 -left-4 rounded-lg bg-white p-4 shadow-lg">
                  <PieChart className="h-12 w-12 text-emerald-600" />
                </div>
                <div className="absolute -right-4 -top-4 rounded-lg bg-white p-4 shadow-lg">
                  <LineChart className="h-12 w-12 text-emerald-600" />
                </div>
              </div>
              <h3 className="mt-8 text-center text-xl font-semibold text-gray-900">
                Transforme seus dados financeiros em decisões inteligentes
              </h3>
              <p className="mt-2 text-center text-gray-600">
                Nossa plataforma utiliza IA avançada para analisar seus gastos,
                identificar padrões e sugerir estratégias para otimizar suas
                finanças.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
