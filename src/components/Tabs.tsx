import * as React from "react";
import { cn } from "../lib/utils";

const TabsContext = React.createContext<{
  value?: string;
  onValueChange?: (val: string) => void;
}>({});

export function Tabs({
  value,
  onValueChange,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & {
  value?: string;
  onValueChange?: (val: string) => void;
}) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-lg bg-brand-surface-container p-1 text-brand-text-muted border border-brand-border",
        className
      )}
      {...props}
    />
  );
}

export function TabsTrigger({
  className,
  value,
  onMouseEnter,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const { value: activeValue, onValueChange } = React.useContext(TabsContext);
  const isActive = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
        isActive
          ? "bg-brand-surface-highest text-white shadow-sm"
          : "hover:text-white",
        className
      )}
      onClick={() => onValueChange?.(value)}
      onMouseEnter={(e) => {
        onMouseEnter?.(e);
        onValueChange?.(value);
      }}
      {...props}
    />
  );
}

export function TabsContent({
  className,
  value,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const { value: activeValue } = React.useContext(TabsContext);
  if (activeValue !== value) return null;

  return (
    <div
      role="tabpanel"
      className={cn(
        "mt-2 focus-visible:outline-none",
        className
      )}
      {...props}
    />
  );
}

