import { getStrapiMedia } from "../lib/media";

const Image = ({ image, style }) => {
  const imageUrl = getStrapiMedia(image);

  return (
    <img
      src={imageUrl}
      alt={image.alternativeText || image.name}
      style={style}
      className="img"
    />
  );
};

export default Image;
