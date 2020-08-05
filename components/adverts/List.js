import PropTypes from 'prop-types';
import Link from 'next/link';

const List = ({ items }) => (
  <ul>
    {items.map(({ _id, name }) => (
      <li key={_id}>
        <Link href={`/annonce/[id]`} as={`/annonce/${_id}`}>
          <a>{name}</a>
        </Link>
      </li>
    ))}
  </ul>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
