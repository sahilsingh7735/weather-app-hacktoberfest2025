'use client';

import dynamic from 'next/dynamic';

const WeatherMap = dynamic(() => import('@/components/WeatherMap'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
});

export default function MapWeatherPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="w-full h-[calc(100vh-2rem)]">
        <h1 className="text-2xl font-bold mb-4">Weather Map</h1>
        <WeatherMap />
      </div>
    </main>
  );
}