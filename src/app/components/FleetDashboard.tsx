'use client'

import React from 'react';
import { Award, Truck, TrendingUp, Calendar, Fuel, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Fleet Name Header */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-600">Toll Global</h1>
        <h2 className="text-xl text-gray-600">Dangerous Goods Division</h2>
      </div>

      {/* Header with Key Metrics */}
      <div className="mb-6 grid grid-cols-5 gap-4">
        <Card className="col-span-1">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Fleet Safety Score</div>
            <div className="text-3xl font-bold text-blue-600">{currentStats.fleetScore}</div>
            <div className="text-xs text-green-600">↑ 8 points this month</div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Improved Drivers</div>
            <div className="text-3xl font-bold text-green-600">{currentStats.improvedDrivers}</div>
            <div className="text-xs text-gray-600">of 12 drivers</div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Fuel Efficiency</div>
            <div className="text-3xl font-bold text-purple-600">{currentStats.fuelSavings}</div>
            <div className="text-xs text-green-600">↑ vs last month</div>
          </CardContent>
        </Card>

        <Card className="col-span-1">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Safety Events</div>
            <div className="text-3xl font-bold text-green-600">{currentStats.safetyEvents}</div>
            <div className="text-xs text-green-600">30 days incident-free</div>
          </CardContent>
        </Card>

        <Card className="col-span-1 bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Ready for Reward</div>
            <div className="text-3xl font-bold text-green-600">{currentStats.topPerformers}</div>
            <button className="mt-1 px-3 py-1 bg-green-600 text-white text-xs rounded-md hover:bg-green-700">
              Issue Now
            </button>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-3 gap-6">
        {/* Safety Score Trends */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Safety Score Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={safetyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="topScore" stroke="#22c55e" name="Top Score" />
                  <Line type="monotone" dataKey="avgScore" stroke="#3b82f6" name="Fleet Average" />
                  <Line type="monotone" dataKey="lowScore" stroke="#ef4444" name="Lowest Score" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Top Performers */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Top Performers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "John Smith", score: 98, improvement: "+15%", streak: "14 days" },
                { name: "Sarah Johnson", score: 96, improvement: "+12%", streak: "10 days" },
                { name: "Mike Williams", score: 95, improvement: "+10%", streak: "8 days" }
              ].map((driver, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{driver.name}</div>
                      <div className="text-sm text-gray-600">
                        {driver.streak} perfect streak
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-blue-600">{driver.score}</div>
                      <div className="text-sm text-green-600">{driver.improvement}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* ROI Metrics */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle className="text-lg">Safety Investment Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="text-sm text-gray-600">Incident Reduction</div>
                <div className="text-2xl font-bold text-blue-600">85%</div>
                <div className="text-xs text-gray-600">vs. Previous Quarter</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="text-sm text-gray-600">Fuel Cost Savings</div>
                <div className="text-2xl font-bold text-green-600">$12,450</div>
                <div className="text-xs text-gray-600">This Quarter</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="text-sm text-gray-600">Insurance Premium Impact</div>
                <div className="text-2xl font-bold text-purple-600">-15%</div>
                <div className="text-xs text-gray-600">Projected Reduction</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Risk Analysis */}
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle className="text-lg">Risk Prevention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm">High-Risk Hours</span>
                <span className="text-sm font-bold text-green-600">-65%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Harsh Events</span>
                <span className="text-sm font-bold text-green-600">-82%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Speeding Incidents</span>
                <span className="text-sm font-bold text-green-600">-78%</span>
              </div>
              <div className="mt-4 p-3 bg-green-50 rounded-lg">
                <div className="text-sm font-semibold text-green-700">30 Days Milestone</div>
                <div className="text-xs text-gray-600">Zero Reportable Incidents</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* After your top performers section */}
      <div className="mt-4 text-center">
        <a 
          href="/leaderboard"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Driver Leaderboard
        </a>
      </div>
    </div>
  );
};

export default FleetDashboard;
