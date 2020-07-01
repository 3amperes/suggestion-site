import React from 'react';
import PropTypes from 'prop-types';

const Logo = ({ width, isFull, ...rest }) => {
  return (
    <div {...rest}>
      {isFull ? (
        <svg width={width} className="fill-current" viewBox="0 0 145 15">
          <title>Suggestion</title>
          <path
            fill="#e87a00"
            d="M67.04 8.5h8.03l-2.11 2.16v1.8h-5.92zm8.03-6.39l-2.11 2.17v1.85h-5.92V2.17z"
          />
          <path d="M11.16 10.45c0 2.37-1.7 4.43-5.55 4.43A7.73 7.73 0 010 12.87l1.7-1.7a6.17 6.17 0 004.01 1.5c2.06 0 2.88-1.04 2.88-1.96S7.05 9 5.3 8.6l-.82-.2C2.37 7.77.2 6.94.2 4.22S2.3 0 5.45 0c2-.08 3.94.64 5.4 2l-1.7 1.7a5.92 5.92 0 00-3.9-1.44c-1.5 0-2.42.72-2.42 1.8s1.44 1.5 3.19 1.9l.67.2c2.16.58 4.47 1.45 4.47 4.28zM88.9 10.45c0 2.37-1.7 4.43-5.55 4.43a7.83 7.83 0 01-5.6-2.06l1.7-1.7a6.17 6.17 0 004 1.49c2.07 0 2.89-1.03 2.89-1.95s-1.55-1.7-3.3-2.11l-.82-.21c-2.1-.57-4.32-1.39-4.32-4.12S80.06 0 83.2 0c2-.07 3.94.65 5.4 2.01l-1.65 1.65a5.92 5.92 0 00-3.9-1.44c-1.5 0-2.42.72-2.42 1.8s1.44 1.49 3.19 1.9l.72.2c2.1.63 4.37 1.5 4.37 4.33zM15.02.26h2.52v8.6a3.42 3.42 0 003.7 3.75c2.42 0 3.66-1.5 3.66-3.75V.26h2.52v8.7c0 3.6-2.05 5.97-6.22 5.97s-6.18-2.42-6.18-5.97zM44.87 6.9v5.4a7.82 7.82 0 01-5.92 2.62c-1.98.04-3.9-.7-5.35-2.05a7.3 7.3 0 01-2.21-5.4A7.27 7.27 0 0138.95 0c1.9-.04 3.73.72 5.04 2.1l.15.21h-.05l-1.54 1.65a4.58 4.58 0 00-3.6-1.7 5 5 0 00-2.37.56 5.1 5.1 0 00-2.62 4.63 5.35 5.35 0 001.39 3.7c.92 1 2.23 1.57 3.6 1.55a5.3 5.3 0 003.4-1.29v-2.3h-4.28v-.68l1.55-1.49zM61.85 6.9v5.4a7.82 7.82 0 01-5.92 2.62c-1.98.04-3.9-.7-5.35-2.05a7.3 7.3 0 01-2.21-5.4A7.27 7.27 0 0155.93 0c1.9-.04 3.73.72 5.04 2.1l.16.21h-.06l-1.6 1.6a4.58 4.58 0 00-3.6-1.7 5 5 0 00-2.36.57 5.1 5.1 0 00-2.63 4.63 5.35 5.35 0 001.4 3.7c.92 1 2.23 1.57 3.6 1.54a5.3 5.3 0 003.4-1.28V9.1h-4.33v-.67l1.54-1.49zM95.96 2.48h-4.37V.25h11.26v2.21h-4.37v12.15h-2.52zM106.45.26v14.36h2.52V.26zM120.3 0a7.13 7.13 0 017.35 7.47 7.36 7.36 0 11-14.71 0A7.13 7.13 0 01120.29 0zm0 2.27c-2.94 0-4.79 2.21-4.79 5.2s1.85 5.2 4.79 5.2 4.78-2.26 4.78-5.2-1.9-5.2-4.79-5.2zM134.08 4.17v10.45h-2.52V.26h2.58l7.35 10.19V.26h2.57v14.41h-2.41z" />
        </svg>
      ) : (
        <svg width={width} viewBox="0 0 8 11">
          <path
            fill="#e87a00"
            d="M0 6.38h8.03L5.92 8.54v1.8H0zM8.03 0L5.92 2.16v1.85H0V.05z"
          />
        </svg>
      )}
    </div>
  );
};

Logo.propTypes = {
  width: PropTypes.number,
  isFull: PropTypes.bool,
};

Logo.defaultProps = {
  width: 145,
  isFull: true,
};

export default Logo;
