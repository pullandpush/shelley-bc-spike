/* button.jsx */
import * as React from 'react';
import style from './button.st.css';

interface ButtonProps {
  /**
   * Kind of button.
   */
  className?: string;
}

class Button extends React.Component<ButtonProps> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <button {...style('root', {}, this.props)} >
        <span className={style.icon} />
        <span className={style.label} >Submit</span>
      </button>
    );
  }
}

export default Button
