/* Text.jsx */
import React, { FunctionComponent } from "react";
import style from './text.st.css';

export type TextVariants = "roar" | "announceLoud" | "announce" | "announceSoft" | "ennounce" | "speakLoud" | "speak" | "speakSoft" | "mention" | "whisper";

interface TextProps {
  as?: String;
  bold?: Boolean;
  truncate?: Boolean;
  uppercase?: Boolean;
  variant?: TextVariants;
}
const defaultProps: TextProps = {
  as: "span",
  bold: false,
  truncate: false,
  uppercase: false,
  variant: "speak"
};

const Text: FunctionComponent<TextProps> = ({ children, truncate, bold = true, uppercase, variant = "speak", as, ...rest }) => {
  const Element: any = as;
  // @ts-ignore
  return children ? <Element {...style('root', {
    bold,
    // uppercase: uppercase === true,
    // truncate: truncate === true,
    variant,
  }, rest)}>{children}</Element> : null;
};


Text.defaultProps = defaultProps;

export default Text
