import "./ProductPage.css";

const imageUrls = {
  black: "black product",
  white: "white product",
  blue: "blue product",
};

const colorMapping = {
  black: "#000000",
  white: "#ffffff",
  blue: "#0000ff",
};

const colorVariants = ["black", "white", "blue"];
const sizeVariants = ["xs", "s", "md", "l", "xl"];

const getQueryParams = () => {
  const params = new URLSearchParams(window.location.search);
  const color = params.get("color") || "black";
  const size = params.get("size") || "md";
  return { color, size };
};

const ProductPage = () => {
  const { color, size } = getQueryParams();

  const handleSelection = (newColor, newSize) => {
    const updateColor = newColor || color;
    const updateSize = newSize || size;
    window.history.pushState(
      null,
      "",
      `?color=${updateColor}&size=${updateSize}`
    );

    window.location.reload();
  };

  return (
    <>
      <h2>Product Card</h2>
      <div className="card">
        <div className="left" style={{ backgroundColor: colorMapping[color] }}>
          {`${imageUrls[color]} - ${size}`}
        </div>
        <div className="right">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio enim
            asperiores
          </p>
          <div className="buttonLayerOne">
            {colorVariants.map((colorVariant, index) => (
              <button
                key={index}
                className={color === colorVariant ? "selected" : ""}
                onClick={() => handleSelection(colorVariant, null)}>
                {colorVariant.charAt(0).toUpperCase() + colorVariant.slice(1)}
              </button>
            ))}
          </div>
          <div className="buttonLayerTwo">
            {sizeVariants.map((sizeVariant, index) => (
              <button
                key={index}
                className={size === sizeVariant ? "selected" : ""}
                onClick={() => handleSelection(null, sizeVariant)}>
                {sizeVariant.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
