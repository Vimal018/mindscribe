import { FC } from "react";

interface EntryCardProps {
  entry: {
    id: string;
    content: string;
    sentiment: string;
    emotions: string[];
    createdAt: string;
    tags: string[];
  };
}

const EntryCard: FC<EntryCardProps> = ({ entry }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <p className="text-lg font-semibold text-gray-900">{entry.content}</p>
      <p className="text-sm text-gray-500 mt-1">Created on: {new Date(entry.createdAt).toLocaleDateString()}</p>

      <div className="mt-4">
        <p className="font-semibold text-gray-700">Sentiment: 
          <span className={`ml-2 ${entry.sentiment === 'positive' ? 'text-green-500' : entry.sentiment === 'negative' ? 'text-red-500' : 'text-yellow-500'}`}>
            {entry.sentiment}
          </span>
        </p>
        {entry.emotions.length > 0 && (
          <div className="mt-2">
            <p className="font-semibold text-gray-700">Emotions:</p>
            <ul className="list-disc pl-5 text-gray-600">
              {entry.emotions.map((emotion, index) => (
                <li key={index} className="text-sm">{emotion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default EntryCard;
