import { RemixResult as RemixResultType } from '../types';

interface RemixResultProps {
  result: RemixResultType;
}

export default function RemixResult({ result }: RemixResultProps) {
  return (
    <div className="max-w-2xl mx-auto mt-8 space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-lg font-medium text-gray-900 mb-4">
          Remixed Text ({result.style})
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-medium text-gray-500">Original Text:</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{result.originalText}</p>
          </div>
          
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-gray-500">Remixed Version:</h3>
            <p className="mt-2 text-gray-700 whitespace-pre-wrap">{result.remixedText}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={() => navigator.clipboard.writeText(result.remixedText)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Copy to Clipboard
          </button>
        </div>
      </div>
    </div>
  );
} 