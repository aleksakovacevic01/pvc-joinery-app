import * as React from "react";
import { cn } from "../../lib/utils";

export interface ToastProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  duration?: number;
  action?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "pointer-events-auto relative flex w-full max-w-sm flex-col gap-1 rounded-lg border border-border bg-background p-4 shadow-lg transition-all",
        className
      )}
      {...props}
    />
  )
);
Toast.displayName = "Toast";

const ToastProvider = ({ children }: { children: React.ReactNode }) => (
  <div className="fixed z-50 flex flex-col gap-2 top-4 right-4 items-end">
    {children}
  </div>
);
ToastProvider.displayName = "ToastProvider";

const ToastTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-base font-semibold", className)}
    {...props}
  />
));
ToastTitle.displayName = "ToastTitle";

const ToastDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
ToastDescription.displayName = "ToastDescription";

const ToastClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn(
      "absolute right-2 top-2 rounded-md p-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring",
      className
    )}
    aria-label="Close"
    {...props}
  >
    <span aria-hidden>×</span>
  </button>
));
ToastClose.displayName = "ToastClose";

const ToastViewport = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "fixed top-4 right-4 z-50 flex flex-col gap-2 w-full max-w-sm",
      className
    )}
    {...props}
  />
));
ToastViewport.displayName = "ToastViewport";

export {
  Toast,
  ToastProvider,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
};
