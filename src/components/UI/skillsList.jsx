import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const skillsImages = [
    
    {
        id: 2,
        src: "https://static.vecteezy.com/system/resources/previews/027/127/463/original/javascript-logo-javascript-icon-transparent-free-png.png"
    },
    {
        id: 3,
        src: "https://www.w3.org/html/logo/downloads/HTML5_1Color_Black.png"
    },
    {
        id: 4,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"
    },
    {
        id: 5,
        src: "https://cdn-icons-png.flaticon.com/512/4299/4299956.png"
    },
    {
        id: 6,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    },
    {
        id: 7,
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Font_Awesome_5_brands_node-js.svg/1200px-Font_Awesome_5_brands_node-js.svg.png"
    },
    
]

const style = {
  skillImg: {
    width: "300px",
    height: "300px",
  },
  
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

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={skillsImages[imageIndex].src}
          style={style.skillImg}
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