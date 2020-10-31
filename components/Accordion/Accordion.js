import { useState, createContext, useContext } from 'react';
import PropTypes from 'prop-types';

const AccordionContext = createContext();

export const useAccordion = () => useContext(AccordionContext);

const Accordion = ({ children, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <AccordionContext.Provider value={{ isOpen, toggle }}>
      <div {...rest}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.propTypes = {
  children: PropTypes.array.isRequired,
};

export default Accordion;
