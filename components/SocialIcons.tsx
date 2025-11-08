import { socials } from "@/data/socials";

function Icon({ name }: { name: string }) {
  const common = {
    width: 18,
    height: 18,
    stroke: "currentColor",
    fill: "none",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "GitHub":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.31 6.84 9.66.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.33 1.11 2.9.85.09-.66.35-1.11.63-1.36-2.22-.26-4.56-1.14-4.56-5.09 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.32.1-2.75 0 0 .84-.27 2.75 1.05A9.25 9.25 0 0 1 12 6.84c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.56 1.43.21 2.49.1 2.75.64.72 1.02 1.64 1.02 2.76 0 3.96-2.35 4.82-4.59 5.08.36.32.68.95.68 1.92 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" fill="currentColor" stroke="none"/>
        </svg>
      );
    case "X":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M3 3l9 10.5L8.5 21l4.5-4.5L21 21l-9-10.5L15.5 3 11 7.5 3 3z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
          <rect x="2" y="9" width="4" height="12" rx="1" ry="1" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "Medium":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M4 7l4.5 6.5L4 21h3l4-6 4 6h3l-4.5-7L18 7h-3l-3.5 5L8 7H4z" />
        </svg>
      );
    case "Discord":
      return (
        <svg {...common} viewBox="0 0 24 24" aria-hidden>
          <path d="M20 5a17 17 0 00-4-.9l-.2.5A13 13 0 0012 4c-1.2 0-2.3.1-3.4.4l-.2-.5A17 17 0 004 5C2.7 7 2 9.2 2 11.5c0 5.2 3.5 8 10 8s10-2.8 10-8C22 9.2 21.3 7 20 5zM9.2 14c-.7 0-1.3-.7-1.3-1.6 0-.8.6-1.6 1.3-1.6.7 0 1.3.7 1.3 1.6 0 .9-.6 1.6-1.3 1.6zm5.6 0c-.7 0-1.3-.7-1.3-1.6 0-.8.6-1.6 1.3-1.6.7 0 1.3.7 1.3 1.6 0 .9-.6 1.6-1.3 1.6z" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export default function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.name}
          className="icon-btn"
        >
          <Icon name={s.name} />
        </a>
      ))}
    </div>
  );
}
