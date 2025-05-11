'use client';
import React from 'react';
import DashboardChart from '../../components/DashboardChart';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">Dashboard Page</h1>
      <DashboardChart />
    </div>
  );
}
