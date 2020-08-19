import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ items }) => (
  <ul>
    {items.map(({ _id, ...item }) => (
      <li key={_id} className="mb-2xl">
        <Item {...item} />
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
