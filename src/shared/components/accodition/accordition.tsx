import React from "react";

import * as Comp from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";

import "./accordition.css";

type AccordionItem = {
  value: string;
  title: string;
  content: React.ReactNode | string;
};

interface AccordionProps {
  items: AccordionItem[];
}

const Accordition = ({ items }: AccordionProps) => (
  <Comp.Root className="AccordionRoot" type="single" defaultValue="item-1" collapsible>
    {items.map((item) => (
      <Comp.Item key={item.value} className="AccordionItem" value={item.value}>
        <AccordionTrigger>{item.title}</AccordionTrigger>
        <AccordionContent>{item.content}</AccordionContent>
      </Comp.Item>
    ))}
  </Comp.Root>
);

const AccordionTrigger = React.forwardRef(
  (
    { children, className, ...props }: { children: React.ReactNode; className?: string },
    forwardedRef,
  ) => (
    <Comp.Header className="AccordionHeader">
      <Comp.Trigger
        className={classNames("AccordionTrigger", className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className="AccordionChevron" aria-hidden />
      </Comp.Trigger>
    </Comp.Header>
  ),
);

const AccordionContent = React.forwardRef(
  (
    { children, className, ...props }: { children: React.ReactNode; className?: string },
    forwardedRef,
  ) => (
    <Comp.Content
      className={classNames("AccordionContent", className)}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Comp.Content>
  ),
);

export { AccordionTrigger, Accordition };
