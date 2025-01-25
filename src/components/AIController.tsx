import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Brain, Network, Activity, Database } from 'lucide-react';

interface MetricData {
  evolution: {
    learning: number;
    adaptation: number;
    optimization: number;
  };
  performance: {
    processing: number;
    memory: number;
    network: number;
  };
}

export const AIController = () => {
  const [metrics, setMetrics] = useState<MetricData>({
    evolution: {
      learning: 0,
      adaptation: 0,
      optimization: 0
    },
    performance: {
      processing: 0,
      memory: 0,
      network: 0
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        evolution: {
          learning: Math.min(100, prev.evolution.learning + Math.random() * 5),
          adaptation: Math.min(100, prev.evolution.adaptation + Math.random() * 4),
          optimization: Math.min(100, prev.evolution.optimization + Math.random() * 6)
        },
        performance: {
          processing: Math.min(100, prev.performance.processing + Math.random() * 5),
          memory: Math.min(100, prev.performance.memory + Math.random() * 4),
          network: Math.min(100, prev.performance.network + Math.random() * 3)
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const MetricDisplay = ({ label, value, icon: Icon, color }: any) => (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center space-x-3">
        <Icon className={`w-6 h-6 ${color}`} />
        <span className="text-gray-300">{label}</span>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-32 bg-gray-700 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${color}`}
            style={{ width: `${value}%` }}
          />
        </div>
        <span className={`text-xl font-bold ${color}`}>
          {value.toFixed(1)}%
        </span>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900">
        <CardHeader>
          <CardTitle className="text-blue-400">AI Evolution Matrix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricDisplay
            label="Learning Rate"
            value={metrics.evolution.learning}
            icon={Brain}
            color="text-purple-400"
          />
          <MetricDisplay
            label="Adaptation"
            value={metrics.evolution.adaptation}
            icon={Network}
            color="text-blue-400"
          />
          <MetricDisplay
            label="Optimization"
            value={metrics.evolution.optimization}
            icon={Activity}
            color="text-green-400"
          />
        </CardContent>
      </Card>

      <Card className="bg-gray-900">
        <CardHeader>
          <CardTitle className="text-purple-400">System Performance</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricDisplay
            label="Processing"
            value={metrics.performance.processing}
            icon={Cpu}
            color="text-yellow-400"
          />
          <MetricDisplay
            label="Memory Usage"
            value={metrics.performance.memory}
            icon={Database}
            color="text-blue-400"
          />
          <MetricDisplay
            label="Network Status"
            value={metrics.performance.network}
            icon={Network}
            color="text-green-400"
          />
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 gap-4">
        <Button 
          className="w-full bg-blue-600 hover:bg-blue-700"
          onClick={() => console.log('Optimizing AI Systems')}
        >
          <Brain className="w-4 h-4 mr-2" />
          Optimize AI Systems
        </Button>
        <Button 
          className="w-full bg-purple-600 hover:bg-purple-700"
          onClick={() => console.log('Initiating Evolution')}
        >
          <Network className="w-4 h-4 mr-2" />
          Initialize Evolution
        </Button>
      </div>
    </div>
  );
};
