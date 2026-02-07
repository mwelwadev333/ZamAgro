export const CROP_DATA = {
  maize: {
    name: 'Maize (Grain)',
    tier1Min: 10.5,
    benchmark: 5.5,
    color: '#10b981', // emerald
  },
  wheat: {
    name: 'Wheat (Irrigated)',
    tier1Min: 9.0,
    benchmark: 7.0,
    color: '#3b82f6', // blue
  },
  soybeans: {
    name: 'Soybeans',
    tier1Min: 4.5,
    benchmark: 2.8,
    color: '#f59e0b', // amber
  },
  tobacco: {
    name: 'Tobacco',
    tier1Min: 4.0,
    benchmark: 1.5,
    color: '#ef4444', // rose
  },
} as const;

export const TIER_THRESHOLDS = [
  { min: 85, max: 1000, name: 'Tier 1', label: 'Elite / World Class', color: 'emerald-500' },
  { min: 60, max: 84, name: 'Tier 2', label: 'High Performance', color: 'blue-500' },
  { min: 40, max: 59, name: 'Tier 3', label: 'Commercial Average', color: 'amber-500' },
  { min: 0, max: 39, name: 'Tier 4', label: 'Below Average', color: 'rose-500' },
] as const;

export type CropType = keyof typeof CROP_DATA;