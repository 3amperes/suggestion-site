import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const variants = {
  exit: { opacity: 0, transition: { duration: 0.3 } },
  enter: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const Image = ({ path, alt, ...rest }) => {
  // const oneSize = require(`images/${path}?resize&size=300`);
  const multipleSizes = require(`images/${path}?resize&sizes[]=300&sizes[]=600&sizes[]=1000`);
  return (
    <picture {...rest}>
      <source srcSet={require(`images/${path}?webp`)} type="image/webp" />
      <source srcSet={require(`images/${path}`)} type="image/jpeg" />
      <div
        style={{
          backgroundImage: `url(${require(`images/${path}?lqip`)}`,
          backgroundSize: 'cover',
          filter: 'blur(10px)',
        }}
        className="absolute inset-0 h-full w-full object-cover object-center "
      />
      <motion.img
        variants={variants}
        alt={alt}
        srcSet={multipleSizes.srcSet}
        src={multipleSizes.src}
        className="transition duration-500 ease-in-out absolute inset-0 h-full w-full object-cover object-center"
      />
    </picture>
  );
};

Image.propTypes = {
  path: PropTypes.string,
  path2: PropTypes.string,
  alt: PropTypes.string,
};

Image.defaultProps = {
  alt: '',
};

export default Image;
