'use client';

import { useState } from 'react';
import { Card } from './ui/Card';
import { Select } from './ui/Select';
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { Calculator as CalcIcon, TrendingUp } from 'lucide-react';
import { CROP_DATA, CropType } from '@/lib/constants';
import { calculateYPI, getTierInfo } from '@/lib/utils';

export function Calculator() {
  const [selectedCrop, setSelectedCrop] = useState<CropType>('maize');
  const [actualYield, setActualYield] = useState<string>('8.5');
  const [ypi, setYpi] = useState<number>(calculateYPI('maize', 8.5));

  const handleCalculate = () => {
    const yieldNum = parseFloat(actualYield) || 0;
    const calculatedYPI = calculateYPI(selectedCrop, yieldNum);
    setYpi(calculatedYPI);
  };

  const tierInfo = getTierInfo(ypi);

  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-6">
        <CalcIcon className="w-6 h-6 text-green-600" />
        <h3 className="text-xl font-semibold text-gray-800">Quick Evaluator</h3>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Crop
          </label>
          <Select value={selectedCrop} onChange={setSelectedCrop}>
            {Object.entries(CROP_DATA).map(([key, data]) => (
              <option key={key} value={key}>
                {data.name}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Actual Yield (t/ha)
          </label>
          <Input
            type="number"
            value={actualYield}
            onChange={setActualYield}
            placeholder="Enter yield in tonnes per hectare"
            min="0"
            max="50"
            step="0.1"
          />
          <div className="mt-2 flex justify-between text-sm text-gray-500">
            <span>Min: 0 t/ha</span>
            <span>Max: 50 t/ha</span>
          </div>
        </div>

        <div className="relative pt-4">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-amber-400 via-blue-400 to-emerald-400 rounded-full"></div>
          <input
            type="range"
            min="0"
            max="50"
            step="0.1"
            value={actualYield}
            onChange={(e) => setActualYield(e.target.value)}
            className="w-full h-2 bg-transparent appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-green-600 [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-lg"
          />
        </div>

        <Button onClick={handleCalculate} className="w-full py-3">
          Calculate YPI
        </Button>

        <div className="p-4 rounded-lg bg-gray-50 border border-gray-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">Yield Performance Index</span>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div className="flex items-baseline gap-2">
            <span className={`text-3xl font-bold text-${tierInfo.color}`}>
              {ypi.toFixed(1)}%
            </span>
            <span className="text-sm text-gray-500">of Tier 1 Minimum</span>
          </div>
          <div className="mt-2">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full bg-${tierInfo.color}`} />
              <span className="text-sm font-medium text-gray-800">{tierInfo.label}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}