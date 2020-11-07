import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import Image from 'next/image';

let easing = [0.175, 0.85, 0.42, 0.96];

const variants = {
  exit: { y: 60, opacity: 0, transition: { duration: 0.4, ease: easing } },
  enter: {
    y: 0,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.4, ease: easing },
  },
};

const Hero = ({ surTitle, title, image, children }) => {
  const onClick = () => {
    if (typeof window === 'undefined') return;
    window.scroll({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="relative mb-4xl h-screen bg-greyishBrownTwo">
      <motion.div
        variants={variants}
        className="relative h-full overflow-hidden"
      >
        {image && (
          <>
            <Image src={image} layout="fill" className="absolute inset-0 object-cover" />
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  'linear-gradient(to left, transparent, #033b4e)',
              }}
            />
          </>
        )}
        <div className="container mx-auto h-full px-lg">
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
      </motion.div>
    </div>
  );
};

Hero.propTypes = {
  surTitle: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.string,
};

export default Hero;
