import PropTypes from 'prop-types';
import { useAccordion } from './Accordion';

const Accordion = ({ children }) => {
  const { isOpen, toggle } = useAccordion();

  return (
    <button onClick={toggle} className="flex items-center w-full">
      <div className="font-bold text-2xl text-pumpkin leading-4 w-1/12">
        {isOpen ? '-' : '+'}
      </div>
      <div className="font-bold uppercase leading-4 text-xs">{children}</div>
    </button>
  );
};

Accordion.propTypes = {
  children: PropTypes.any,
};

export default Accordion;
