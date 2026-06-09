interface MonogramAvatarProps {
  name: string;
  size?: number;
  className?: string;
}

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");
}

export default function MonogramAvatar({ name, size = 48, className = "" }: MonogramAvatarProps) {
  return (
    <div
      className={`flex items-center justify-center rounded-full shrink-0 font-bold select-none ${className}`}
      style={{
        width: size,
        height: size,
        background: "var(--color-navy)",
        border: "2px solid var(--color-gold)",
        color: "var(--color-gold)",
        fontSize: size * 0.36,
        fontFamily: "'Playfair Display', 'Lato', sans-serif",
      }}
      aria-hidden="true"
    >
      {initials(name)}
    </div>
  );
}
