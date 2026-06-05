// types/framer-motion.d.ts
import "framer-motion";

declare module "framer-motion" {
  export interface MotionStyle {
    top?: string | number;
    left?: string | number;
    right?: string | number;
    bottom?: string | number;
    cursor?: string;
  }
}
