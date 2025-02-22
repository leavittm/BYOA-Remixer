import { useState } from 'react';
import { REMIX_STYLES } from '../constants/remixStyles';
import { RemixFormData } from '../types';

interface RemixFormProps {
  onSubmit: (data: RemixFormData) => void;
}

export default function RemixForm({ onSubmit }: RemixFormProps) {
  const [formData, setFormData] = useState<RemixFormData>({
    style: REMIX_STYLES[0].id,
    sourceText: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
      <div>
        <label htmlFor="style" className="block text-sm font-medium text-gray-700">
          Remix Style
        </label>
        <select
          id="style"
          value={formData.style}
          onChange={(e) => setFormData({ ...formData, style: e.target.value })}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          {REMIX_STYLES.map((style) => (
            <option key={style.id} value={style.id}>
              {style.name} - {style.description}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="sourceText" className="block text-sm font-medium text-gray-700">
          Source Text
        </label>
        <div className="mt-1">
          <textarea
            id="sourceText"
            rows={6}
            value={formData.sourceText}
            onChange={(e) => setFormData({ ...formData, sourceText: e.target.value })}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter the text you want to remix..."
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Generate Remix
        </button>
      </div>
    </form>
  );
} 