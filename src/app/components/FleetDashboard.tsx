'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent } from "@/components/ui/card";

const FleetDashboard = () => {
  // Example trend data
  const safetyTrends = [
    { date: '2024-01', avgScore: 85, topScore: 95, lowScore: 75, accidents: 0, nearMisses: 2 },
    { date: '2024-02', avgScore: 87, topScore: 96, lowScore: 77, accidents: 0, nearMisses: 1 },
    { date: '2024-03', avgScore: 89, topScore: 97, lowScore: 79, accidents: 0, nearMisses: 1 },
    { date: '2024-04', avgScore: 91, topScore: 98, lowScore: 82, accidents: 0, nearMisses: 0 },
    { date: '2024-05', avgScore: 93, topScore: 99, lowScore: 84, accidents: 0, nearMisses: 0 }
  ];

  // Current snapshot data
  const currentStats = {
    fleetScore: 93,
    improvedDrivers: 8,
    fuelSavings: "12.5%",
    safetyEvents: 0,
    topPerformers: 3
  };

  return (
    <div className="grid grid-rows-[10px_1fr_10px] items-start justify-items-center min-h-screen bg-gray-50/50 p-6 pt-4 pb-20 sm:p-12 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col w-full max-w-[1400px] space-y-6 row-start-2">
        {/* Fleet Header - More subtle and professional */}
        <div className="flex flex-col space-y-1 mb-2">
          <h1 className="text-2xl font-semibold text-gray-900">Toll Global</h1>
          <h2 className="text-sm font-medium text-gray-500">Dangerous Goods Division</h2>
        </div>

        {/* Key Metrics - Refined spacing and hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium text-gray-500">Fleet Safety Score</div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold text-blue-600">{currentStats.fleetScore}</div>
                  <div className="text-xs font-medium text-green-600">↑ 8 pts</div>
                </div>
                <div className="text-xs text-gray-400">vs. last month</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium text-gray-500">Improved Drivers</div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold text-green-600">{currentStats.improvedDrivers}</div>
                  <div className="text-xs text-gray-500">of 12</div>
                </div>
                <div className="text-xs text-gray-400">this month</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium text-gray-500">Fuel Efficiency</div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold text-purple-600">{currentStats.fuelSavings}</div>
                  <div className="text-xs font-medium text-green-600">↑ vs last month</div>
                </div>
                <div className="text-xs text-gray-400">vs. last month</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-5">
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium text-gray-500">Safety Events</div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold text-green-600">{currentStats.safetyEvents}</div>
                  <div className="text-xs text-gray-500">30 days incident-free</div>
                </div>
                <div className="text-xs text-gray-400">vs. last month</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-5">
              <div className="flex flex-col space-y-1">
                <div className="text-sm font-medium text-gray-500">Ready for Reward</div>
                <div className="flex items-baseline space-x-2">
                  <div className="text-3xl font-bold text-green-600">{currentStats.topPerformers}</div>
                  <button className="mt-1 px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700">
                    Issue Now
                  </button>
                </div>
                <div className="text-xs text-gray-400">vs. last month</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section - Better organized */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Safety Score Trends - Main focus */}
          <Card className="lg:col-span-2 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="space-y-1">
                  <h3 className="text-lg font-semibold text-gray-900">Safety Score Trends</h3>
                  <p className="text-sm text-gray-500">Last 5 months performance</p>
                </div>
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={safetyTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="date" stroke="#6b7280" fontSize={12} tickLine={false} />
                    <YAxis stroke="#6b7280" fontSize={12} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="avgScore" stroke="#2563eb" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="topScore" stroke="#16a34a" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="lowScore" stroke="#dc2626" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Risk Analysis - More visual */}
          <Card className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Risk Prevention</h3>
              <div className="space-y-4">
                {[
                  { label: 'High-Risk Hours', value: '-65%', color: 'green' },
                  { label: 'Harsh Events', value: '-82%', color: 'green' },
                  { label: 'Speeding Incidents', value: '-78%', color: 'green' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm font-medium text-gray-600">{item.label}</span>
                    <span className="text-sm font-bold text-green-600">{item.value}</span>
                  </div>
                ))}
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-sm font-semibold text-green-700">30 Days Milestone</div>
                  <div className="text-xs text-green-600">Zero Reportable Incidents</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation - More subtle */}
        <div className="flex justify-center mt-8">
          <a 
            href="/leaderboard"
            className="px-4 py-2 bg-white text-blue-600 border border-blue-200 rounded-md hover:bg-blue-50 transition-colors font-medium text-sm"
          >
            View Driver Leaderboard →
          </a>
        </div>
      </main>
    </div>
  );
};

export default FleetDashboard;
