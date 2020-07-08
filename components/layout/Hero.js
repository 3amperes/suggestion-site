import PropTypes from 'prop-types';
import Image from '@components/Image';

const Hero = ({ surTitle, title, imgPath, children }) => {
  const onClick = () => {
    if (typeof window === 'undefined') return;
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
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
      <div className="container  mx-auto h-full px-lg">
        <div className="h-full text-white flex items-center relative z-1 -mx-lg">
          <div className=" relative lg:w-1/3 md:w-1/2 max-w-320 px-lg lg:ml-2col">
            <p className="surtitle">{surTitle}</p>
            <h1>{title}</h1>
            <div>{children}</div>
            <button
              onClick={onClick}
              className="absolute z-20 left-0 bottom-0 p-lg transform translate-y-4xl"
            >
              <svg width="48" viewBox="0 0 48 48">
                <circle
                  cx="24"
                  cy="24"
                  r="24"
                  fill="#fff"
                  data-name="Ellipse 14"
                />
                <path
                  fill="#e87a00"
                  d="M24.88 26.47V16h-2v10.47h-2.95l4.04 5.9 4.05-5.9h-3.14z"
                />
              </svg>
            </button>
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
