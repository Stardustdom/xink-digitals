import Link from "next/link";
import type { CSSProperties, MouseEventHandler, ReactNode } from "react";

// Same radial bubble burst as the hero buttons.
const BUBBLE_COUNT = 14;
const BUBBLES = Array.from({ length: BUBBLE_COUNT }).map((_, i) => {
  const t = (i / BUBBLE_COUNT) * Math.PI * 2 + ((i * 37) % 11) * 0.012;
  const c = Math.cos(t);
  const s = Math.sin(t);
  const far = 0.7 + ((i * 53) % 10) * 0.035;
  return {
    s: `${[0.45, 0.6, 0.35, 0.5, 0.4][i % 5]}em`,
    x0: `${(c * 3.6).toFixed(2)}em`,
    y0: `${(s * 1.2).toFixed(2)}em`,
    dx: `${(c * 8.6 * far).toFixed(2)}em`,
    dy: `${(s * 4.8 * far).toFixed(2)}em`,
  };
});

type Props = {
  children: ReactNode;
  href?: string;
  type?: "button" | "submit";
  onClick?: MouseEventHandler<HTMLElement>;
  block?: boolean;
  tone?: "dark" | "purple";
  className?: string;
};

/** The water-fill, ripple-ring and bubble-burst button used in the hero, for any solid pill button. */
export default function WaterButton({ children, href, type = "button", onClick, block, tone = "dark", className = "" }: Props) {
  const inner = (
    <>
      <span className="store-btn-water" />
      <span className="store-btn-content">{children}</span>
    </>
  );
  return (
    <div className={`store-btn store-btn-sm ${tone === "purple" ? "store-btn-purple" : ""} ${block ? "store-btn-block" : ""} ${className}`}>
      <span className="store-btn-ring" />
      <span className="store-btn-ring store-btn-ring-2" />
      <span className="store-btn-ring store-btn-ring-3" />
      {BUBBLES.map((b, i) => (
        <span key={i} className="store-btn-bubble" style={{ "--s": b.s, "--x0": b.x0, "--y0": b.y0, "--dx": b.dx, "--dy": b.dy } as CSSProperties} />
      ))}
      {href ? (
        <Link href={href} onClick={onClick} className="store-btn-link">{inner}</Link>
      ) : (
        <button type={type} onClick={onClick} className="store-btn-link">{inner}</button>
      )}
    </div>
  );
}
