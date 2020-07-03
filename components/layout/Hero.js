import PropTypes from 'prop-types';

const Hero = ({ surTitle, title, imgPath, children }) => {
  return (
    <div
      className="w-full h-screen relative bg-greyishBrownTwo mb-4xl"
      style={{ maxHeight: 768, paddingTop: 68 }}
    >
      <img
        src={`${imgPath}.jpg`}
        srcSet={`${imgPath}@2x.jpg 2x, ${imgPath}@3x.jpg 3x`}
        alt=""
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
      {imgPath && (
        <div
          className="absolute left-0 bottom-0 w-full h-full opacity-25"
          style={{
            backgroundImage: 'linear-gradient(to left, transparent, #033b4e)',
          }}
        />
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
