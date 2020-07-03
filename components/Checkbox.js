import React from 'react';

const Checkbox = (props) => (
  <svg viewBox="0 0 12 12" width="12" {...props}>
    <path fill="#fff" d="M.46.46h11.08v11.08H.46z" />
    <g fill="#e87a00">
      <path d="M12 0H0v12h12zm-.92.92v10.16H.92V.92z" />
      <path d="M3.23 3.23h5.54v5.54H3.23z" className="active" />
    </g>
  </svg>
);

export default Checkbox;
