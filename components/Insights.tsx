import { Card } from './ui/Card';
import { TIER_THRESHOLDS } from '@/lib/constants';

interface InsightsProps {
  ypi: number;
}

export function Insights({ ypi }: InsightsProps) {
  const getTier = (ypi: number) => {
    return TIER_THRESHOLDS.find(t => ypi >= t.min && ypi <= t.max) || TIER_THRESHOLDS[3];
  };

  const tier = getTier(ypi);

  const getTierDescription = (tierName: string) => {
    const descriptions = {
      'Tier 1': 'Exceptional productivity placing you among Zambia\'s top-performing farms. Consider adopting advanced precision agriculture techniques.',
      'Tier 2': 'Strong performance above commercial benchmarks. Focus on optimizing input efficiency and resource management.',
      'Tier 3': 'Average commercial performance. Review agronomic practices and consider soil testing for improvement opportunities.',
      'Tier 4': 'Below average performance. Recommended: agronomic consultation, soil analysis, and reviewing farming practices.',
    };
    return descriptions[tierName as keyof typeof descriptions];
  };

  return (
    <Card className="h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-4 h-4 rounded-full bg-${tier.color}`} />
        <h3 className="text-lg font-semibold text-gray-800">Performance Insights</h3>
      </div>
      
      <div className="space-y-4">
        <div className={`p-4 rounded-lg bg-${tier.color.replace('500', '50')} border border-${tier.color.replace('500', '200')}`}>
          <h4 className="font-medium text-gray-900 mb-1">{tier.label}</h4>
          <p className="text-sm text-gray-600">{getTierDescription(tier.name)}</p>
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-gray-900">Performance Tiers:</h4>
          <div className="space-y-1">
            {TIER_THRESHOLDS.map((t) => (
              <div key={t.name} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full bg-${t.color}`} />
                  <span className="text-sm text-gray-700">{t.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {t.min}-{t.max === 1000 ? '100+' : t.max}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}