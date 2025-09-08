import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as React from "react";

import "./Tabs.css";

const Tabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ ...props }, ref) => <TabsPrimitive.Root ref={ref} className="TabsRoot" {...props} />);
Tabs.displayName = TabsPrimitive.Root.displayName;

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ ...props }, ref) => <TabsPrimitive.List ref={ref} className="TabsList" {...props} />);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ ...props }, ref) => <TabsPrimitive.Trigger ref={ref} className="TabsTrigger" {...props} />);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ ...props }, ref) => <TabsPrimitive.Content ref={ref} className="TabsContent" {...props} />);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsList, TabsTrigger, TabsContent };
