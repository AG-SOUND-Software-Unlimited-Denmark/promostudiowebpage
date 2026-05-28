import Image from "next/image";

type BrandMarkProps = {
  variant?: "hero" | "header";
  animate?: boolean;
};

export function BrandMark({ variant = "hero", animate = true }: BrandMarkProps) {
  const isHero = variant === "hero";
  const iconSize = isHero ? 56 : 36;

  return (
    <div
      className={
        isHero
          ? "flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5"
          : "flex items-center gap-2.5"
      }
    >
      <Image
        src="/logo-icon.png"
        alt=""
        width={iconSize}
        height={iconSize}
        className="shrink-0 rounded-2xl shadow-lg shadow-brand-pink/20"
        priority={isHero}
      />
      {isHero ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.2em] ${animate ? "brand-dissolve" : ""}`}
        >
          <span className="brand-gradient-text">AG-SOUND · AI Promo Studio</span>
        </p>
      ) : (
        <span className="text-sm font-semibold tracking-tight text-white">AI Promo Studio</span>
      )}
    </div>
  );
}
