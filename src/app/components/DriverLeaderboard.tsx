'use client'

import React, { useState } from 'react';
import { Award, TrendingUp, Clock, Carrot } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DriverLeaderboard = () => {
  const [timeRange, setTimeRange] = useState('shift');
  
  const drivers = [
    {
      id: 1,
      name: "John Smith",
      safetyScore: 98,
      currentStreak: 14,
      lastScratchie: 2,
      fuelEfficiency: 94,
      incidents: 0,
      harshEvents: 0,
      idleTime: "4.2%",
      onTimeDeliveries: "100%",
      hoursWorked: 7.5,
      trends: { shift: "+2%", week: "+5%", month: "+12%" },
      rank: { shift: 1, week: 1, month: 2 }
    },
    {
      id: 2,
      name: "Sarah Johnson",
      safetyScore: 96,
      currentStreak: 10,
      lastScratchie: 4,
      fuelEfficiency: 92,
      incidents: 0,
      harshEvents: 1,
      idleTime: "4.8%",
      onTimeDeliveries: "98%",
      hoursWorked: 7.5,
      trends: { shift: "+1%", week: "+4%", month: "+10%" },
      rank: { shift: 2, week: 2, month: 1 }
    },
    {
      id: 3,
      name: "Mike Williams",
      safetyScore: 95,
      currentStreak: 8,
      lastScratchie: 6,
      fuelEfficiency: 90,
      incidents: 0,
      harshEvents: 1,
      idleTime: "5.1%",
      onTimeDeliveries: "97%",
      hoursWorked: 7.5,
      trends: { shift: "+3%", week: "+6%", month: "+8%" },
      rank: { shift: 3, week: 3, month: 3 }
    },
    {
      id: 4,
      name: "David Brown",
      safetyScore: 94,
      currentStreak: 5,
      lastScratchie: 3,
      fuelEfficiency: 89,
      incidents: 0,
      harshEvents: 2,
      idleTime: "5.5%",
      onTimeDeliveries: "96%",
      hoursWorked: 7.5,
      trends: { shift: "+1%", week: "+3%", month: "+7%" },
      rank: { shift: 4, week: 4, month: 4 }
    },
    {
      id: 5,
      name: "Lisa Davis",
      safetyScore: 93,
      currentStreak: 4,
      lastScratchie: 7,
      fuelEfficiency: 88,
      incidents: 1,
      harshEvents: 2,
      idleTime: "5.8%",
      onTimeDeliveries: "95%",
      hoursWorked: 7.5,
      trends: { shift: "0%", week: "+2%", month: "+5%" },
      rank: { shift: 5, week: 5, month: 6 }
    },
    {
      id: 6,
      name: "James Wilson",
      safetyScore: 92,
      currentStreak: 3,
      lastScratchie: 8,
      fuelEfficiency: 87,
      incidents: 1,
      harshEvents: 2,
      idleTime: "6.0%",
      onTimeDeliveries: "94%",
      hoursWorked: 7.5,
      trends: { shift: "-1%", week: "+1%", month: "+4%" },
      rank: { shift: 6, week: 6, month: 5 }
    },
    {
      id: 7,
      name: "Robert Taylor",
      safetyScore: 91,
      currentStreak: 2,
      lastScratchie: 10,
      fuelEfficiency: 86,
      incidents: 1,
      harshEvents: 3,
      idleTime: "6.2%",
      onTimeDeliveries: "93%",
      hoursWorked: 7.5,
      trends: { shift: "-1%", week: "0%", month: "+3%" },
      rank: { shift: 7, week: 7, month: 7 }
    },
    {
      id: 8,
      name: "Mary Anderson",
      safetyScore: 90,
      currentStreak: 1,
      lastScratchie: 12,
      fuelEfficiency: 85,
      incidents: 2,
      harshEvents: 3,
      idleTime: "6.5%",
      onTimeDeliveries: "92%",
      hoursWorked: 7.5,
      trends: { shift: "-2%", week: "-1%", month: "+2%" },
      rank: { shift: 8, week: 8, month: 8 }
    },
    {
      id: 9,
      name: "Steven Moore",
      safetyScore: 89,
      currentStreak: 0,
      lastScratchie: 14,
      fuelEfficiency: 84,
      incidents: 2,
      harshEvents: 4,
      idleTime: "6.8%",
      onTimeDeliveries: "91%",
      hoursWorked: 7.5,
      trends: { shift: "-2%", week: "-2%", month: "+1%" },
      rank: { shift: 9, week: 9, month: 9 }
    },
    {
      id: 10,
      name: "Patricia White",
      safetyScore: 88,
      currentStreak: 0,
      lastScratchie: 15,
      fuelEfficiency: 83,
      incidents: 2,
      harshEvents: 4,
      idleTime: "7.0%",
      onTimeDeliveries: "90%",
      hoursWorked: 7.5,
      trends: { shift: "-3%", week: "-2%", month: "0%" },
      rank: { shift: 10, week: 10, month: 10 }
    },
    {
      id: 11,
      name: "Thomas Martin",
      safetyScore: 87,
      currentStreak: 0,
      lastScratchie: 16,
      fuelEfficiency: 82,
      incidents: 3,
      harshEvents: 5,
      idleTime: "7.2%",
      onTimeDeliveries: "89%",
      hoursWorked: 7.5,
      trends: { shift: "-3%", week: "-3%", month: "-1%" },
      rank: { shift: 11, week: 11, month: 11 }
    },
    {
      id: 12,
      name: "Karen Lee",
      safetyScore: 86,
      currentStreak: 0,
      lastScratchie: 18,
      fuelEfficiency: 81,
      incidents: 3,
      harshEvents: 5,
      idleTime: "7.5%",
      onTimeDeliveries: "88%",
      hoursWorked: 7.5,
      trends: { shift: "-4%", week: "-3%", month: "-2%" },
      rank: { shift: 12, week: 12, month: 12 }
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <select 
            className="p-2 border rounded-md bg-white"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="shift">Current Shift</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
          </select>
          <div className="text-sm text-gray-600 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Active Drivers</div>
            <div className="text-2xl font-bold">12/12</div>
            <div className="text-xs text-green-600">All drivers on duty</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Average Safety Score</div>
            <div className="text-2xl font-bold">94.2</div>
            <div className="text-xs text-green-600">↑ 2.1 vs last {timeRange}</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Scratchies Available</div>
            <div className="text-2xl font-bold">3</div>
            <div className="text-xs text-blue-600">Daily budget: $150</div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <div className="text-sm text-gray-600">Perfect Streaks</div>
            <div className="text-2xl font-bold">5</div>
            <div className="text-xs text-green-600">Drivers with 7+ days</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Rank</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Driver</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Safety Score</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Trend</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Perfect Streak</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Fuel Efficiency</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">On-Time</th>
                  <th className="text-left p-3 text-sm font-semibold text-gray-600">Last Scratchie</th>
                  <th className="text-center p-3 text-sm font-semibold text-gray-600">Issue Scratchie</th>
                </tr>
              </thead>
              <tbody>
                {drivers.map((driver) => (
                  <tr key={driver.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-3">
                      <div className="flex items-center">
                        <span className={`font-bold ${
                          driver.rank[timeRange] <= 3 ? 'text-green-600' : 'text-gray-600'
                        }`}>
                          #{driver.rank[timeRange]}
                        </span>
                        {driver.rank[timeRange] === 1 && (
                          <Award className="h-4 w-4 text-yellow-500 ml-2" />
                        )}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="font-semibold">{driver.name}</div>
                      <div className="text-xs text-gray-500">
                        {driver.hoursWorked}hrs on shift
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{driver.safetyScore}</div>
                      <div className="text-xs text-gray-500">
                        {driver.incidents === 0 ? 'No incidents' : `${driver.incidents} incidents`}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className={`font-bold ${
                        driver.trends[timeRange].startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {driver.trends[timeRange]}
                      </div>
                      <div className="text-xs text-gray-500">vs last {timeRange}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{driver.currentStreak} days</div>
                      <div className="text-xs text-gray-500">
                        {driver.harshEvents === 0 ? 'No harsh events' : `${driver.harshEvents} harsh events`}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{driver.fuelEfficiency}%</div>
                      <div className="text-xs text-gray-500">
                        Idle: {driver.idleTime}
                      </div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{driver.onTimeDeliveries}</div>
                    </td>
                    <td className="p-3">
                      <div className="font-bold">{driver.lastScratchie} days ago</div>
                    </td>
                    <td className="p-3">
                      <button 
                        className={`p-2 rounded-md ${
                          driver.lastScratchie > 5 
                            ? 'bg-green-600 text-white hover:bg-green-700' 
                            : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={driver.lastScratchie <= 5}
                      >
                        <Carrot className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DriverLeaderboard;
