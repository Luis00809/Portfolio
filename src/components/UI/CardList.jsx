import { motion, useAnimation, easeIn, easeOut } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";



const styles = {
    size: {
        width: '310px',
        height: '300px',
        // border: "2px solid rgb(2, 62, 138)",
        borderRadius: "35px",
    
    },
    bottomSpacer: {
        marginBottom: '40px',

    },
    title: {
       color: "rgb(255, 211, 116)",
       fontSize: "20px",
       fontFamily: 'open sans',
    },
    backColor: {
        background: "rgb(4, 15, 15)",
        border: 'none',
    },
    imgDescription: {
      fontFamily: 'open sans',
    }

    
}

function Cardlist(props) {
    const { ref, inView } = useInView({
        triggerOnce: true, // Change this if you want the animation to trigger again whenever it comes in view
      });

      const animation = useAnimation();

      useEffect(() => {
        if (inView) {
          animation.start("show");
        }
      }, [inView, animation]);

      return (
        <div className="container ">
     <div className="d-flex flex-wrap justify-content-center gx-2">
       {props.project.map(item => {
         const { ref, inView } = useInView({
           triggerOnce: true, // Change this if you want the animation to trigger again whenever it comes in view
         });

         const animation = useAnimation();

         useEffect(() => {
           if (inView) {
             animation.start("show");
           }
         }, [inView, animation]);

         const [isHovered, setIsHovered] = useState(false)

         return (
           <motion.div
             ref={ref}
             animate={animation}
             initial="hidden"
             variants={{
               hidden: { 
                opacity: 0, 
                x: '100%', 
                transition: { duration: 1 }
               },
               show: { 
                opacity: 1, 
                x: '0', 
                transition: { delay: 1, duration: 0.5, ease: easeIn, staggerChildren: 6 }
               },
             }}
             style={styles.backColor}
             key={item.id}
             className="card col-md-6 col-lg-4 d-flex flex-column align-items-center "
             onMouseEnter={() => setIsHovered(true)}
             onMouseLeave={() => setIsHovered(false)}
           >
                
                <div className="image-container">
                  <a target="_blank" href={item.link}>
                    <img src={item.src} className="card-img-top portCard" alt={item.name}/>
                  </a>
                </div>
                {isHovered && <a target="_blank" href={item.link}><p style={styles.imgDescription} className="imgDescription text-center">{item.description}</p></a>}

                <div className="card-body">
                  <h5 style={styles.title} className="card-title text-center ">{item.name}</h5>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>
      );
     };
 





export default Cardlist;