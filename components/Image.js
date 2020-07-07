import { useState } from 'react';
import PropTypes from 'prop-types';

const Image = ({ path, alt, ...rest }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const onLoad = () => {
    console.log('image is loaded');
    setImageLoaded(true);
  };

  return (
    <picture {...rest}>
      <source srcSet={require(`images/${path}?webp`)} type="image/webp" />
      <source srcSet={require(`images/${path}?lqip`)} type="image/jpeg" />
      <source srcSet={require(`images/${path}`)} type="image/jpeg" />
      <div
        style={{
          backgroundImage: `url(${require(`images/${path}?lqip`)}`,
          backgroundSize: 'cover',
          filter: 'blur(10px)',
        }}
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <img
        alt={alt}
        src={require(`images/${path}`)}
        onLoad={onLoad}
        style={{ opacity: imageLoaded ? 1 : 0 }}
        className="transition duration-500 ease-in-out  absolute inset-0 h-full w-full object-cover object-center"
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
