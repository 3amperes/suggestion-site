import React from 'react';
import PropTypes from 'prop-types';

const NumberSection = ({ number, title, children }) => {
  return (
    <div className="mb-3xl">
      <h3 className="mb-lg">
        <span className="number">{number}.</span>
        {title}
      </h3>
      {children}
    </div>
  );
};

NumberSection.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.array,
  ]),
};

export default NumberSection;
