type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* ciemne, brązowo-złote tło w środku */}
        <radialGradient id="badgeInner" cx="50%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#fde68a" /> {/* jasny żółto-kremowy */}
          <stop offset="45%" stopColor="#f59e0b" /> {/* złoto */}
          <stop offset="100%" stopColor="#3b1f0b" /> {/* ciemny brąz */}
        </radialGradient>

        {/* złoty pierścień */}
        <linearGradient id="badgeRing" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fee9b2" />
          <stop offset="45%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#a16207" />
        </linearGradient>
      </defs>

      {/* zewnętrzny ciemny krąg – jak tło pod odznaką */}
      <circle cx="32" cy="32" r="30" fill="#020617" />

      {/* wypełnienie środka – brązowo-złote */}
      <circle cx="32" cy="32" r="22" fill="url(#badgeInner)" />

      {/* złoty pierścień na brzegu */}
      <circle
        cx="32"
        cy="32"
        r="22"
        fill="none"
        stroke="url(#badgeRing)"
        strokeWidth="2"
      />

      {/* jasny złoto-kremowy krzyż */}
      <path d="M30 18h4v12h12v4H34v12h-4V34H18v-4h12V18z" fill="#fef9c3" />
    </svg>
  );
}
