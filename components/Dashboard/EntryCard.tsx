const EntryCard = ({ entry }: { entry: { id: string; content: string; sentiment: string; date: string } }) => {
    return (
      <div className="border p-4 rounded mb-4">
        <h2 className="text-xl">{entry.content}</h2>
        <p className="text-sm text-gray-500">Sentiment: {entry.sentiment}</p>
        <p className="text-sm text-gray-500">Date: {entry.date}</p>
      </div>
    );
  };
  
  export default EntryCard;
  