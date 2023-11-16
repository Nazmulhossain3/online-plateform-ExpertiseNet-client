import { Carousel } from "keep-react";
import carouse1 from '../../assets/Img/carouse1.png'
import carouse2 from '../../assets/Img/carouse2.png'
import carouse3 from '../../assets/Img/carouse3.png'
import carouse4 from '../../assets/Img/carouse4.png'
import carouse5 from '../../assets/Img/carouse5.png'

const TopBanner = () => {
    return (
        <div className="h-56 w-full sm:h-64 xl:h-[500px] 2xl:h-96 p-6">
   
      <Carousel slideInterval={3000} showControls={true} indicators={true}>
        <img
          src={carouse1}
          alt="slider-1"
          className="!h-full !w-full"
        />
        <img
          src={carouse2}
          alt="slider-2"
          className="!h-full !w-full"
        />
        <img
          src={carouse3}
          alt="slider-3"
          className="!h-full !w-full"
        />
        <img
          src={carouse4}
          alt="slider-4"
          className="!h-full !w-full"
        />
        <img
          src={carouse5}
          alt="slider-4"
          className="!h-full !w-full"
        />
      </Carousel>
   
        </div>
    );
};

export default TopBanner;