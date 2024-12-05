import DriverLeaderboard from '../components/DriverLeaderboard'
import { ArrowLeft } from 'lucide-react'

export default function LeaderboardPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full">
        <div className="flex flex-col gap-4 w-full">
          <a 
            href="/"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Fleet Dashboard</span>
          </a>
          <h1 className="text-2xl font-bold">Driver Performance Rankings</h1>
        </div>
        <DriverLeaderboard />
      </main>
    </div>
  )
} 