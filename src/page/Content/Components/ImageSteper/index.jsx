import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./style.css";

const STYLE_IMAGE = (url) => {
  return {
    background: 'cover.bg4',
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
            <div key={image.split('/')[-1]} className="each-slide-effect">
              <div style={STYLE_IMAGE(image)}></div>
            </div>
          </>
        );
      })}
    </Slide>
  );
};

export default ImageSteper;
