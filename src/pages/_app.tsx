import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AIController } from '@/components/AIController';
import { SystemMonitor } from '@/components/SystemMonitor';
import { QuantumDashboard } from '@/components/QuantumDashboard';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Component {...pageProps} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <AIController />
          <div className="space-y-6">
            <SystemMonitor />
            <QuantumDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}