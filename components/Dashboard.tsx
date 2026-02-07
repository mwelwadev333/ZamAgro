'use client';

import { useState } from 'react';
import { Calculator } from './Calculator';
import { BarChart } from './BarChart';
import { Insights } from './Insights';
import { TrendingUp, Target, Award, BarChart as BarChartIcon } from 'lucide-react';
import { CROP_DATA, CropType } from '@/lib/constants';
import { calculateYPI } from '@/lib/utils';

export function Dashboard() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('maize');
  const [actualYield, setActualYield] = useState<number>(8.5);
  const ypi = calculateYPI(selectedCrop, actualYield);

  const stats = [
    {
      icon: TrendingUp,
      label: 'YPI Score',
      value: `${ypi.toFixed(1)}%`,
      change: '+2.5%',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      icon: Target,
      label: 'Tier 1 Target',
      value: `${CROP_DATA[selectedCrop].tier1Min} t/ha`,
      change: 'Fixed',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      icon: Award,
      label: 'Zambian Benchmark',
      value: `${CROP_DATA[selectedCrop].benchmark} t/ha`,
      change: 'National',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      icon: BarChartIcon,
      label: 'Your Yield',
      value: `${actualYield} t/ha`,
      change: 'Current',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Yield Performance Dashboard
        </h1>
        <p className="text-gray-600">
          Evaluate and optimize your farm's productivity against Zambian commercial benchmarks
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-2 ${stat.bgColor} rounded-lg`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <span className="text-sm font-medium text-gray-500 px-2 py-1 bg-gray-100 rounded">
                {stat.change}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Calculator */}
        <div className="lg:col-span-1">
          <Calculator />
        </div>

        {/* Middle Column - Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <BarChartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Live Yield Comparison</h3>
                <p className="text-sm text-gray-600">Your performance vs benchmarks</p>
              </div>
            </div>
            <BarChart crop={selectedCrop} userYield={actualYield} />
          </div>
        </div>

        {/* Right Column - Insights */}
        <div className="lg:col-span-3">
          <Insights ypi={ypi} />
        </div>
      </div>
    </div>
  );
}