import PropTypes from 'prop-types';
import Image from '@components/Image';

const Hero = ({ surTitle, title, imgPath, children }) => {
  return (
    <div className="relative bg-greyishBrownTwo mb-4xl h-screen overflow-hidden">
      {imgPath && (
        <>
          <Image path={imgPath} className="absolute inset-0 object-cover" />
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: 'linear-gradient(to left, transparent, #033b4e)',
            }}
          />
        </>
      )}
      <div className="container mx-auto h-full px-lg">
        <div className="h-full text-white flex items-center relative z-1 -mx-lg">
          <div className="lg:w-1/3 md:w-1/2 max-w-320 px-lg lg:ml-2col">
            <p className="surtitle">{surTitle}</p>
            <h1>{title}</h1>
            <div>{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  surTitle: PropTypes.string,
  title: PropTypes.string,
  imgPath: PropTypes.string,
  children: PropTypes.string,
};

export default Hero;
