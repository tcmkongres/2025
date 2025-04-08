import kongres from "../assets/kongres.jpg";

const ImageSection = () => (
  <div className="mt-32 sm:mt-16 xl:mx-auto xl:max-w-7xl xl:px-8">
    <img
      alt=""
      src={kongres}
      className="aspect-5/3 w-full object-cover xl:rounded-3xl"
    />
  </div>
);

export default ImageSection;
