"use client";

import * as React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ButtonWithIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: LucideIcon;
  variant?: "brand" | "navy" | "light" | "outline";
  size?: "sm" | "md" | "lg";
  asLink?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const ButtonWithIcon = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonWithIconProps
>(
  (
    {
      children = "İşlem",
      icon: Icon = ArrowUpRight,
      variant = "brand",
      size = "md",
      asLink = false,
      href,
      className,
      ...props
    },
    ref
  ) => {
    // Sizing setups
    const sizeClasses = {
      sm: "h-10 text-xs ps-5 pe-12 hover:ps-12 hover:pe-5",
      md: "h-12 text-sm ps-6 pe-14 hover:ps-14 hover:pe-6",
      lg: "h-14 text-base ps-7 pe-16 hover:ps-16 hover:pe-7",
    }[size];

    const circleSizeClasses = {
      sm: "w-8 h-8 right-1 group-hover:right-[calc(100%-36px)]",
      md: "w-10 h-10 right-1 group-hover:right-[calc(100%-44px)]",
      lg: "w-12 h-12 right-1 group-hover:right-[calc(100%-52px)]",
    }[size];

    const iconSize = size === "sm" ? 14 : size === "lg" ? 18 : 16;

    // Theme variants based on Erpovy color palette
    const variantClasses = {
      brand:
        "bg-[#1992d1] hover:bg-[#1582bc] text-white shadow-md shadow-[#1992d1]/20",
      navy:
        "bg-[#070d1c] hover:bg-slate-900 text-white shadow-md shadow-black/20",
      light:
        "bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/90 shadow-xs",
      outline:
        "bg-transparent hover:bg-white/10 text-white border border-white/20",
    }[variant];

    const circleVariantClasses = {
      brand: "bg-[#070d1c] text-white",
      navy: "bg-[#1992d1] text-white",
      light: "bg-[#1992d1] text-white",
      outline: "bg-white text-[#070d1c]",
    }[variant];

    const baseClass = cn(
      "relative inline-flex items-center justify-center font-bold rounded-full group transition-all duration-500 w-fit overflow-hidden cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1]",
      sizeClasses,
      variantClasses,
      className
    );

    const innerContent = (
      <>
        <span className="relative z-10 transition-all duration-500 whitespace-nowrap">
          {children}
        </span>
        <div
          className={cn(
            "absolute rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-45 shadow-xs",
            circleSizeClasses,
            circleVariantClasses
          )}
        >
          <Icon size={iconSize} />
        </div>
      </>
    );

    if (asLink || href) {
      return (
        <a
          href={href}
          ref={ref as React.Ref<HTMLAnchorElement>}
          className={baseClass}
          onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
          target={props.target}
          rel={props.rel}
        >
          {innerContent}
        </a>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClass}
        {...props}
      >
        {innerContent}
      </button>
    );
  }
);

ButtonWithIcon.displayName = "ButtonWithIcon";

export default ButtonWithIcon;
