import React from 'react';
import '../../styles/Common.css'

const Button = ({ className, type = 'button', onClick, children, variant, ...props }) => {
  let buttonClass = 'btn';

  if (variant === 'primary') {
    buttonClass += ' btn-primary';
  } else if (variant === 'secondary') {
    buttonClass += ' btn-secondary';
  } else if (variant === 'dropdown') {
    buttonClass += ' btn-dropdown';
  }

  // Add additional classes passed via className prop if any
  if (className) {
    buttonClass += ` ${className}`;
  }

  return (
    <button className={buttonClass} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
