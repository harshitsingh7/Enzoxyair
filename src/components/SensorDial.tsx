import React from 'react';

interface SensorDialProps {
  pm25: number;
  aqi: number;
  status?: string;
  voc?: string;
  humidity?: string;
  fanSpeed?: number | string;
  isAuto?: boolean;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'dark' | 'light';
}

export const SensorDial: React.FC<SensorDialProps> = ({
  pm25,
  aqi,
  status = 'Good',
  voc = '0.02 ppm',
  humidity = '45%',
  fanSpeed = 2,
  isAuto = true,
  size = 'md',
  theme = 'dark'
}) => {
  // Arc calculation (270 degrees sweep)
  // Max PM2.5 reference 300
  const normalized = Math.min(Math.max(pm25 / 250, 0), 1);
  const strokeDashoffset = 440 - (440 * (normalized * 0.75));

  const isDark = theme === 'dark';

  return (
    <div className={`relative p-6 sm:p-8 rounded-3xl transition-all ${
      isDark 
        ? 'bg-[#122525] border border-[rgba(255,255,255,0.12)] text-white shadow-2xl backdrop-blur-xl' 
        : 'bg-white border border-[rgba(11,25,25,0.08)] text-[#191c1c] shadow-lg'
    }`}>
      {/* Top Header Badge */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DE2BA] animate-pulse" />
          <span className={`text-[10px] font-headline uppercase font-semibold tracking-[0.2em] ${
            isDark ? 'text-[#2DE2BA]' : 'text-[#006b56]'
          }`}>
            Live Laser Sensing
          </span>
        </div>
        <div className={`px-2.5 py-1 rounded-full text-[9px] font-headline font-semibold uppercase tracking-widest ${
          isDark 
            ? 'bg-white/10 text-[#D4E5E1]' 
            : 'bg-[#E8EDED] text-[#0B1919]'
        }`}>
          {isAuto ? 'AUTO MODE ACTIVE' : `SPEED ${fanSpeed}`}
        </div>
      </div>

      {/* Circular Radial Gauge */}
      <div className="relative flex flex-col items-center justify-center my-4">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-135" viewBox="0 0 160 160">
            {/* Background Track */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(11,25,25,0.08)'}
              strokeWidth="5"
              fill="transparent"
              strokeDasharray="440"
              strokeDashoffset="110"
              strokeLinecap="round"
            />
            {/* Active Arc */}
            <circle
              cx="80"
              cy="80"
              r="70"
              stroke="#2DE2BA"
              strokeWidth="5"
              fill="transparent"
              strokeDasharray="440"
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>

          {/* Central Metric Readout */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-headline text-5xl font-semibold tracking-tight leading-none text-white drop-shadow-sm">
              {pm25}
            </span>
            <span className={`text-[10px] font-headline font-semibold uppercase tracking-[0.24em] mt-2 ${
              isDark ? 'text-[#2DE2BA]' : 'text-[#006b56]'
            }`}>
              µg/m³ PM2.5
            </span>
            <span className={`text-[11px] font-medium tracking-wide mt-1 ${
              isDark ? 'text-[#D4E5E1]' : 'text-[#424848]'
            }`}>
              AQI: {aqi} · {status}
            </span>
          </div>
        </div>
      </div>

      {/* Telemetry Micro Readouts */}
      <div className={`grid grid-cols-3 gap-2 pt-6 border-t ${
        isDark ? 'border-[rgba(255,255,255,0.08)]' : 'border-[rgba(11,25,25,0.06)]'
      }`}>
        <div className="text-center">
          <p className="text-[10px] font-headline uppercase tracking-[0.16em] text-[#737878]">VOCs</p>
          <p className="font-headline text-sm font-semibold mt-0.5">{voc}</p>
        </div>
        <div className="text-center border-x border-[rgba(255,255,255,0.08)]">
          <p className="text-[10px] font-headline uppercase tracking-[0.16em] text-[#737878]">Humidity</p>
          <p className="font-headline text-sm font-semibold mt-0.5">{humidity}</p>
        </div>
        <div className="text-center">
          <p className="text-[10px] font-headline uppercase tracking-[0.16em] text-[#737878]">Filtration</p>
          <p className="font-headline text-sm font-semibold text-[#2DE2BA] mt-0.5">99.97%</p>
        </div>
      </div>
    </div>
  );
};
