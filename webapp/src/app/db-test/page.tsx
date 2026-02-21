'use client'

import { useState } from 'react'

interface TestResult {
  success: boolean
  message: string
  details?: {
    userCount: number
    tokenCount: number
    testUserCreated: string
    timestamp: string
  }
  error?: string
  timestamp: string
}

export default function DatabaseTestPage() {
  const [result, setResult] = useState<TestResult | null>(null)
  const [loading, setLoading] = useState(false)

  const runTest = async () => {
    setLoading(true)
    setResult(null)

    try {
      const response = await fetch('/api/db-test')
      const data = await response.json()
      setResult(data)
    } catch (error) {
      setResult({
        success: false,
        message: 'Failed to run database test',
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-2xl">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">
          Database Connection Test
        </h1>
        
        <p className="text-gray-600 mb-6">
          This page tests the database connection for the Kommon application.
          Click the button below to run the test.
        </p>

        <button
          onClick={runTest}
          disabled={loading}
          className={`px-6 py-3 rounded-md font-medium transition-colors ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          } text-white`}
        >
          {loading ? 'Running Test...' : 'Test Database Connection'}
        </button>

        {result && (
          <div className="mt-6">
            <div
              className={`p-4 rounded-md border ${
                result.success
                  ? 'bg-green-50 border-green-200'
                  : 'bg-red-50 border-red-200'
              }`}
            >
              <div className="flex items-center mb-2">
                <div
                  className={`w-3 h-3 rounded-full mr-2 ${
                    result.success ? 'bg-green-500' : 'bg-red-500'
                  }`}
                />
                <h3
                  className={`font-semibold ${
                    result.success ? 'text-green-800' : 'text-red-800'
                  }`}
                >
                  {result.success ? 'Success' : 'Failed'}
                </h3>
              </div>
              
              <p
                className={`mb-3 ${
                  result.success ? 'text-green-700' : 'text-red-700'
                }`}
              >
                {result.message}
              </p>

              {result.details && (
                <div className="bg-white rounded p-3 border">
                  <h4 className="font-medium text-gray-800 mb-2">Test Details:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      <span className="font-medium">Current Users:</span>{' '}
                      {result.details.userCount}
                    </li>
                    <li>
                      <span className="font-medium">Verification Tokens:</span>{' '}
                      {result.details.tokenCount}
                    </li>
                    <li>
                      <span className="font-medium">Test User ID:</span>{' '}
                      {result.details.testUserCreated}
                    </li>
                    <li>
                      <span className="font-medium">Timestamp:</span>{' '}
                      {new Date(result.details.timestamp).toLocaleString()}
                    </li>
                  </ul>
                </div>
              )}

              {result.error && (
                <div className="bg-red-100 rounded p-3 border border-red-200 mt-3">
                  <h4 className="font-medium text-red-800 mb-1">Error Details:</h4>
                  <code className="text-sm text-red-700 break-all">
                    {result.error}
                  </code>
                </div>
              )}

              <p className="text-xs text-gray-500 mt-3">
                Test run at: {new Date(result.timestamp).toLocaleString()}
              </p>
            </div>
          </div>
        )}

        <div className="mt-8 bg-gray-50 rounded p-4">
          <h3 className="font-medium text-gray-800 mb-2">What this test does:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Connects to the PostgreSQL database</li>
            <li>• Counts existing users and verification tokens</li>
            <li>• Creates a temporary test user</li>
            <li>• Deletes the test user (cleanup)</li>
            <li>• Verifies all tables are accessible</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
