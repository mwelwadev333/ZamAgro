'use client';

import { useEffect, useState } from 'react';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CROP_DATA, CropType } from '@/lib/constants';

interface BarChartProps {
  crop: CropType;
  userYield: number;
}

export function BarChart({ crop, userYield }: BarChartProps) {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const cropData = CROP_DATA[crop];
    const chartData = [
      {
        name: 'Zambian Benchmark',
        yield: cropData.benchmark,
        fill: '#9ca3af', // gray
      },
      {
        name: 'Tier 1 Minimum',
        yield: cropData.tier1Min,
        fill: '#10b981', // emerald
      },
      {
        name: 'Your Yield',
        yield: userYield,
        fill: '#3b82f6', // blue
      },
    ];
    setData(chartData);
  }, [crop, userYield]);

  return (
    <div className="w-full h-64 md:h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            fontSize={12}
          />
          <YAxis 
            stroke="#6b7280"
            label={{ value: 'Yield (t/ha)', angle: -90, position: 'insideLeft' }}
            fontSize={12}
          />
          <Tooltip 
            formatter={(value) => [`${value} t/ha`, 'Yield']}
            contentStyle={{ 
              backgroundColor: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Bar dataKey="yield" radius={[4, 4, 0, 0]} />
        </RechartsBarChart>
      </ResponsiveContainer>
    </div>
  );
}