import { CSSProperties } from "react";

export interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  contentClassName?: CSSProperties;
}