import React from 'react'

function App() {
  const students = [
    "Yaasiin Mohamud Abudllaahi",
    "Yasin Dev"
  
    
  ]
  return (
     <div className="min-h-screen bg-blue-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-cyan-200 p-6 rounded-lg shadow-xl w-full max-w-md">
        {/* Title for the list */}
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          List Of Group
        </h1>

        {/* Ordered list to display student names */}
        <ol className="list-decimal list-inside space-y-2 text-lg text-gray-700">
          {students.map((student, index) => (
            <li key={index} className="pl-2">
              {student}
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

export default App
