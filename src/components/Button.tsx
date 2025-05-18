import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
};

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors rounded-2xl shadow-[8px_8px_20px_rgba(0,0,0,0.4)]";

  const variants = {
    primary: "text-white bg-black hover:bg-gray-900",
    secondary: "text-white bg-black hover:bg-gray-900",
    outline:
      "text-white bg-black hover:bg-gray-700 transition-colors duration-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        scroll={false}
        onClick={(e) => {
          if (href.startsWith("#")) {
            e.preventDefault();
            document
              .querySelector(href)
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
