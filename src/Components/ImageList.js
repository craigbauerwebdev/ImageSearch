import ImageShow from "./ImageShow";
import "../scss/imagelist.scss";

const ImageList = ({ images }) => {
  const results = images.map((image, i) => (
    <ImageShow key={image.id} image={image} />
  ));

  return <div className="image-list">{results}</div>;
};

export default ImageList;
