/* Text.jsx */
import React, { FunctionComponent } from "react";
import style from './text.st.css';

export type TextVariants = "roar" | "announceLoud" | "announce" | "announceSoft" | "ennounce" | "speakLoud" | "speak" | "speakSoft" | "mention" | "whisper";

interface TextProps {
  as?: string;
  bold?: boolean;
  truncate?: boolean;
  uppercase?: boolean;
  variant?: TextVariants;
}

const Text: FunctionComponent<TextProps> = ({
  children,
  truncate = false,
  bold = false,
  uppercase = false,
  variant = "speak",
  as = "span",
  ...rest
}) => {
  const Element: any = as;
  return <Element {...style('root', {
    bold,
    truncate,
    uppercase,
    variant,
  }, rest)}>{children}</Element>;
};

export default Text
