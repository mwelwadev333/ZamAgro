import { CROP_DATA, TIER_THRESHOLDS, CropType } from './constants';

export function calculateYPI(crop: CropType, actualYield: number): number {
  const cropData = CROP_DATA[crop];
  const ypi = (actualYield / cropData.tier1Min) * 100;
  return parseFloat(ypi.toFixed(1));
}

export function getTierInfo(ypi: number) {
  return TIER_THRESHOLDS.find(
    tier => ypi >= tier.min && ypi <= tier.max
  ) || TIER_THRESHOLDS[TIER_THRESHOLDS.length - 1];
}

export function formatNumber(num: number, decimals: number = 1): string {
  return num.toFixed(decimals);
}