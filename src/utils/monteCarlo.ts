export const parseNumbers = (input: string): number[] => {
  return input
    .split(/[ ,]+/)
    .map(s => s.trim())
    .filter(Boolean)
    .map(Number)
    .filter(n => !isNaN(n));
};

export const calculateMonteCarloHistogram = (
  values: number[],
  remainingValue: number,
  iterations: number
): Array<{ acc: number; count: number }> => {
  if (values.length === 0 || !Number.isFinite(remainingValue) || remainingValue <= 0) return [];
  
  const accCounts: Record<number, number> = {};
  for (let i = 0; i < iterations; i++) {
    let sum = 0;
    let acc = 0;
    while (sum < remainingValue) {
      const idx = Math.floor(Math.random() * values.length);
      sum += values[idx];
      acc++;
    }
    accCounts[acc] = (accCounts[acc] || 0) + 1;
  }
  
  // Umwandeln in Array für recharts
  return Object.entries(accCounts)
    .map(([acc, count]) => ({ acc: Number(acc), count }))
    .sort((a, b) => a.acc - b.acc);
};

export const calculatePercentiles = (
  monteCarloHistogram: Array<{ acc: number; count: number }>
): {
  p95: number;
  p85: number;
  p75: number;
  p50: number;
} | null => {
  if (monteCarloHistogram.length === 0) return null;
  
  // Erstelle Array aller Akkumulationen (mit Wiederholungen)
  const allAccumulations: number[] = [];
  monteCarloHistogram.forEach(({ acc, count }) => {
    for (let i = 0; i < count; i++) {
      allAccumulations.push(acc);
    }
  });
  
  // Sortiere für Perzentilberechnung
  allAccumulations.sort((a, b) => a - b);
  
  const total = allAccumulations.length;
  const getPercentile = (p: number) => {
    const index = Math.ceil((p / 100) * total) - 1;
    return allAccumulations[Math.max(0, Math.min(index, total - 1))];
  };
  
  return {
    p95: getPercentile(95),
    p85: getPercentile(85),
    p75: getPercentile(75),
    p50: getPercentile(50)
  };
}; 