import "../scss/imageshow.scss";

function ImageShow({ image }) {
  return (
    <div
      className="image-show"
      style={{
        background: `url(${image.urls.thumb})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default ImageShow;
