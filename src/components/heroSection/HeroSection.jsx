import image from "../../assets/Front-page.jpg";
const HeroSection = () => {
  return (
    <div>
      <img className="w-full h-[40vh] object-cover" src={image} alt="image" />
    </div>
  );
};

export default HeroSection;
