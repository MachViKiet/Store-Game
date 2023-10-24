import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const STYLE_IMAGE = (url) => {
  return {
    backgroundImage: `url(${url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };
};

const ImageSteper = (progs) => {
    
  const images = progs.image;

  return (
    <Slide>
      {images.map((image) => {
        return (
          <>
            <div className="each-slide-effect">
              <div style={STYLE_IMAGE(image)}></div>
            </div>
          </>
        );
      })}
    </Slide>
  );
};

export default ImageSteper;
