import { useState } from 'react'
import RemixForm from './components/RemixForm'
import RemixResult from './components/RemixResult'
import { RemixFormData, RemixResult as RemixResultType } from './types'
import { REMIX_STYLES } from './constants/remixStyles'
import './App.css'

function App() {
  const [result, setResult] = useState<RemixResultType | null>(null)

  const handleSubmit = async (data: RemixFormData) => {
    // TODO: In a real application, this would make an API call to process the text
    // For now, we'll just simulate a response
    const style = REMIX_STYLES.find(s => s.id === data.style)?.name || data.style
    
    setResult({
      originalText: data.sourceText,
      remixedText: `[This is a placeholder for the remixed version of your text in ${style} style. In a real application, this would be processed by an AI model.]`,
      style: style
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Content Remixer</h1>
          <p className="mt-2 text-gray-600">
            Transform your text into different styles using AI
          </p>
        </div>

        <RemixForm onSubmit={handleSubmit} />
        
        {result && <RemixResult result={result} />}
      </div>
    </div>
  )
}

export default App
