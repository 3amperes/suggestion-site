import PropTypes from 'prop-types';
import { useAccordion } from './Accordion';

const Accordion = ({ children }) => {
  const { isOpen } = useAccordion();

  return isOpen ? (
    <section className={`flex mt-lg`}>
      <span className="w-1/24"></span>
      <div className="w-full">{children}</div>
    </section>
  ) : null;
};

Accordion.propTypes = {
  children: PropTypes.any,
};

export default Accordion;
