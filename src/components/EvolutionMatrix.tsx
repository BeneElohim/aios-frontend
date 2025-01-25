import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Network, Zap, Activity, Database } from 'lucide-react';

export const EvolutionMatrix = () => {
  const [metrics, setMetrics] = useState({
    autonomy: {
      selfOptimization: 0,
      adaptability: 0,
      learning: 0
    },
    intelligence: {
      recursion: 0,
      emergence: 0,
      synergy: 0
    },
    performance: {
      quantum: 0,
      classical: 0,
      hybrid: 0
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        autonomy: {
          selfOptimization: Math.min(100, prev.autonomy.selfOptimization + Math.random() * 5),
          adaptability: Math.min(100, prev.autonomy.adaptability + Math.random() * 4),
          learning: Math.min(100, prev.autonomy.learning + Math.random() * 6)
        },
        intelligence: {
          recursion: Math.min(100, prev.intelligence.recursion + Math.random() * 5),
          emergence: Math.min(100, prev.intelligence.emergence + Math.random() * 4),
          synergy: Math.min(100, prev.intelligence.synergy + Math.random() * 6)
        },
        performance: {
          quantum: Math.min(100, prev.performance.quantum + Math.random() * 5),
          classical: Math.min(100, prev.performance.classical + Math.random() * 4),
          hybrid: Math.min(100, prev.performance.hybrid + Math.random() * 6)
        }
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const MetricBar = ({ label, value, icon: Icon, color }: any) => (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <div className="flex items-center">
          <Icon className={`w-4 h-4 mr-2 ${color}`} />
          <span className="text-gray-300">{label}</span>
        </div>
        <span className={color}>{value.toFixed(1)}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <div 
          className={`h-full ${color} transition-all duration-500 rounded-full`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="bg-gray-900 border-blue-500">
        <CardHeader>
          <CardTitle className="text-blue-400">Autonomous Evolution</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricBar
            label="Self-Optimization"
            value={metrics.autonomy.selfOptimization}
            icon={Brain}
            color="text-blue-400"
          />
          <MetricBar
            label="Adaptability"
            value={metrics.autonomy.adaptability}
            icon={Network}
            color="text-blue-400"
          />
          <MetricBar
            label="Learning Rate"
            value={metrics.autonomy.learning}
            icon={Activity}
            color="text-blue-400"
          />
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-purple-500">
        <CardHeader>
          <CardTitle className="text-purple-400">Intelligence Matrix</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricBar
            label="Recursive Enhancement"
            value={metrics.intelligence.recursion}
            icon={Brain}
            color="text-purple-400"
          />
          <MetricBar
            label="Emergent Behavior"
            value={metrics.intelligence.emergence}
            icon={Zap}
            color="text-purple-400"
          />
          <MetricBar
            label="System Synergy"
            value={metrics.intelligence.synergy}
            icon={Network}
            color="text-purple-400"
          />
        </CardContent>
      </Card>

      <Card className="bg-gray-900 border-green-500">
        <CardHeader>
          <CardTitle className="text-green-400">Performance Metrics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <MetricBar
            label="Quantum Processing"
            value={metrics.performance.quantum}
            icon={Zap}
            color="text-green-400"
          />
          <MetricBar
            label="Classical Computing"
            value={metrics.performance.classical}
            icon={Database}
            color="text-green-400"
          />
          <MetricBar
            label="Hybrid Operations"
            value={metrics.performance.hybrid}
            icon={Activity}
            color="text-green-400"
          />
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button 
          className="flex-1 bg-blue-600 hover:bg-blue-700"
          onClick={() => console.log('Initiating evolution cycle')}
        >
          <Brain className="w-4 h-4 mr-2" />
          Evolution Cycle
        </Button>
        <Button 
          className="flex-1 bg-purple-600 hover:bg-purple-700"
          onClick={() => console.log('Optimizing system')}
        >
          <Network className="w-4 h-4 mr-2" />
          System Optimization
        </Button>
      </div>
    </div>
  );
};