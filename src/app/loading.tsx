import { BarChart3 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <BarChart3 className="h-10 w-10 text-emerald-600" />
          <h1 className="ml-2 text-3xl font-bold text-emerald-600">
            finance.ai
          </h1>
        </div>
        <div className="mt-8 flex space-x-2">
          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-300" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-500 delay-150" />
          <div className="h-3 w-3 animate-pulse rounded-full bg-emerald-700 delay-300" />
        </div>
        <p className="mt-4 text-sm text-gray-500">
          Preparando sua experiência financeira...
        </p>
      </div>
    </div>
  );
};

export default Loading;
