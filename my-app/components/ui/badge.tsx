<<<<<<< HEAD
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
=======
import type * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
>>>>>>> refs/remotes/origin/main

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
<<<<<<< HEAD
=======
        success:
          "border-transparent bg-green-500 text-white hover:bg-green-500/80",
>>>>>>> refs/remotes/origin/main
      },
    },
    defaultVariants: {
      variant: "default",
    },
<<<<<<< HEAD
  },
)
=======
  }
);
>>>>>>> refs/remotes/origin/main

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
<<<<<<< HEAD
  )
}

export { Badge, badgeVariants }
=======
  );
}

export { Badge, badgeVariants };
>>>>>>> refs/remotes/origin/main
