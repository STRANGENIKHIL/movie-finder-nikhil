export default function ErrorState({ message, onRetry, isEmpty = false }) {
  return (
    <div className="error-state">
      <div className="error-icon">{isEmpty ? '🎭' : '⚠️'}</div>
      <h2 className="error-title">{isEmpty ? 'No Results Found' : 'Something Went Wrong'}</h2>
      <p className="error-msg">{message}</p>
      {onRetry && (
        <button className="retry-btn" onClick={onRetry}>
          ↺ Try Again
        </button>
      )}
    </div>
  );
}
