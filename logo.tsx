export function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Compass Circle */}
        <circle cx="20" cy="20" r="18" stroke="#0A2540" strokeWidth="2" fill="white"/>
        
        {/* Compass Points */}
        <path d="M20 4 L20 10 M20 30 L20 36 M4 20 L10 20 M30 20 L36 20" stroke="#0A2540" strokeWidth="1.5"/>
        
        {/* Growth Chart Line */}
        <path 
          d="M10 24 L14 20 L18 22 L22 16 L26 18 L30 12" 
          stroke="#00B386" 
          strokeWidth="2" 
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Chart Points */}
        <circle cx="10" cy="24" r="1.5" fill="#00B386"/>
        <circle cx="14" cy="20" r="1.5" fill="#00B386"/>
        <circle cx="18" cy="22" r="1.5" fill="#00B386"/>
        <circle cx="22" cy="16" r="1.5" fill="#00B386"/>
        <circle cx="26" cy="18" r="1.5" fill="#00B386"/>
        <circle cx="30" cy="12" r="1.5" fill="#00B386"/>
        
        {/* Compass Needle */}
        <path d="M20 20 L18 13 L20 15 L22 13 Z" fill="#0A2540"/>
      </svg>
      <span className="font-semibold text-xl" style={{ color: '#0A2540' }}>
        Capital Compass
      </span>
    </div>
  );
}
