export function Card({ children, className }) {
    return (
      <div className={`bg-white p-6 shadow-lg rounded-xl ${className}`}>
        {children}
      </div>
    );
  }
  
  