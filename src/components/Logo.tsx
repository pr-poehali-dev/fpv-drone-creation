const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative w-10 h-10 border-2 border-current flex items-center justify-center">
        <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-current"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-current"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-current"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-current"></div>
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="8" r="4" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1"/>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm font-bold tracking-wider">НПЦ ФЛАЙ ТЕХ</span>
      </div>
    </div>
  );
};

export default Logo;
