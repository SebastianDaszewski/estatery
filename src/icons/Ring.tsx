type RingProps = {
  children: React.ReactNode;
};

const Ring = ({ children }: RingProps) => {
  const radius = 36;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="relative w-[84px] h-[84px]">
      <svg
        width="84"
        height="84"
        viewBox="0 0 84 84"
        className="absolute top-0 left-0"
      >
        {/* Szary tło-ring */}
        <circle
          cx="42"
          cy="42"
          r={radius}
          stroke="#EAECF4"
          strokeWidth="4"
          fill="none"
        />
        {/* Fioletowy ring */}
        <circle
          cx="42"
          cy="42"
          r={radius}
          stroke="#6851FF"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={75}
          strokeLinecap="round"
          transform="rotate(-90 42 42)"
        />
      </svg>

      {/* Avatar wewnątrz */}
      <div className="absolute w-full h-full top-[12px] left-[12px] rounded-full">
        {children}
      </div>
    </div>
  );
};

export default Ring;
