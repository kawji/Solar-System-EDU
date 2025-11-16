import clsx from "clsx";

type PropLogo = {
  size: "lg" | "md" | "sm";
};

export default function Logo({ size }: PropLogo) {
  return (
    <span
      className={clsx(
        size === "lg"
          ? "text-4xl"
          : size === "md"
          ? "text-3xl"
          : "text-2xl",
        "font-bold tracking-tight flex items-center gap-2 select-none"
      )}
    >
      {/* Orbit Circle */}
      <span className="relative w-6 h-6 flex items-center justify-center">
        <span className="absolute w-5 h-5 border-2 border-blue-500/60 rounded-full animate-[spin_6s_linear_infinite]"></span>
        <span className="w-2 h-2 bg-amber-400 rounded-full shadow-md"></span>
      </span>

      {/* Logo Text */}
      <span className="flex flex-row leading-none">
        <span className="text-black/95">SS</span>
        <span className="text-blue-600">E</span>
      </span>
    </span>
  );
}
