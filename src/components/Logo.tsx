const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 border-2 border-current flex items-center justify-center">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current"></div>
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="2" x2="12" y2="8" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="12" y1="16" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="2" y1="12" x2="8" y2="12" stroke="currentColor" strokeWidth="1.5"/>
          <line x1="16" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="12" cy="12" r="2" fill="currentColor"/>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-wider">НПЦ ФЛАЙ ТЕХ</span>
      </div>
    </div>
  );
};

export default Logo;