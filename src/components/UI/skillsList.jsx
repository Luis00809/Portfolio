import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useMediaQuery } from 'react-responsive';


const skillsImages = [
    
    {
        id: 2,
        src: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
    },
    {
        id: 3,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/800px-HTML5_Badge.svg.png"
    },
    {
        id: 4,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
    },
    {
        id: 5,
        src: "https://cdn-icons-png.flaticon.com/512/4248/4248416.png"
    },
    {
        id: 6,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
        id: 7,
        src: "https://static-00.iconduck.com/assets.00/node-js-icon-227x256-913nazt0.png"
    },
    {
      id: 8,
      src: "https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Pic.png"
    }
    
]

const style = {
  skillImg: {
    width: "300px",
    height: "300px",
  },
  imgOnSmall: {
    width: "100px",
    height: "100px",
  }
  
}


const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const SkillsList = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, skillsImages.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const isSmall = useMediaQuery({ query: '(max-width: 750px)' });


  return (

    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={skillsImages[imageIndex].src}
          style={isSmall? style.imgOnSmall : style.skillImg}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>
      <div  className="next" onClick={() => paginate(1)}>
        {"‣"}
      </div>
      <div  className="prev" onClick={() => paginate(-1)}>
        {"‣"}
      </div>
    </>
  );
};

export default SkillsList;