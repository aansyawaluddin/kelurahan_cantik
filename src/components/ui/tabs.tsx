import * as TabsPrimitive from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";

export const Tabs = TabsPrimitive.Root;

export const TabsList: React.FC<TabsPrimitive.TabsListProps> = ({
  className,
  ...props
}) => (
  <TabsPrimitive.List
    className={cn("inline-flex border-b", className)}
    {...props}
  />
);

export const TabsTrigger: React.FC<TabsPrimitive.TabsTriggerProps> = ({
  className,
  ...props
}) => (
  <TabsPrimitive.Trigger
    className={cn(
      "px-4 py-2 text-sm font-medium data-[state=active]:border-b-2 data-[state=active]:border-blue-500",
      className
    )}
    {...props}
  />
);

export const TabsContent: React.FC<TabsPrimitive.TabsContentProps> = ({
  className,
  ...props
}) => <TabsPrimitive.Content className={cn("mt-4", className)} {...props} />;
