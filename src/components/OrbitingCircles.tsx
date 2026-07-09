import * as React from "react";
import { cn } from "../lib/utils";

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 50,
  path = true,
  ...props
}: OrbitingCirclesProps) {
  // Convert children to array to compute spacing angles
  const childrenArray = React.Children.toArray(children);

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-white/5 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
            strokeDasharray="4 4"
          />
        </svg>
      )}

      {childrenArray.map((child, index) => {
        // Distribute items evenly along the 360 degree circle
        const angleOffset = (360 / childrenArray.length) * index;

        return (
          <div
            key={index}
            style={
              {
                "--duration": duration,
                "--radius": radius,
                "--delay": -delay,
                "--angle-offset": `${angleOffset}deg`,
              } as React.CSSProperties
            }
            className={cn(
              "absolute flex size-full transform-gpu items-center justify-center rounded-full border border-transparent [animation-delay:calc(var(--delay)*1s)]",
              reverse 
                ? "animate-[orbit_calc(var(--duration)*1s)_linear_infinite_reverse]" 
                : "animate-[orbit_calc(var(--duration)*1s)_linear_infinite]",
              className
            )}
            {...props}
          >
            {child}
          </div>
        );
      })}
    </>
  );
}
