// src/components/IconRenderer.tsx
import * as Icons from "lucide-react";

export const IconRenderer = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const IconComponent =
    (Icons as any)[name.charAt(0).toUpperCase() + name.slice(1)] ||
    Icons.HelpCircle;
  return <IconComponent className={className} />;
};
