"use client";
/**
 * Person Component
 * ----------------
 * Renders a person silhouette SVG with optional overlaid text.
 *
 * Props:
 * - orientation: "left" | "right"
 *    → Flips the silhouette if "right".
 *
 * - imageProps: Settings for the SVG image.
 *    - width: SVG width (default "401")
 *    - height: SVG height (default "825")
 *    - imageColor: Color of the silhouette (default "#CD82BB")
 *    - imageClassName: Extra CSS classes for the image container.
 *
 * - textProps: Settings for the overlaid text.
 *    - text: The text to display.
 *    - textColor: Color of the text (default "black").
 *    - x, y: Position in SVG (default "50%" and "20%").
 *            These values represent the center of the text container.
 *    - fontSize: Font size (default "36px").
 *    - fontWeight: Font weight (default "bold").
 *    - textMaxWidth, textMaxHeight: Maximum width/height for the text area.
 *    - textClassName: Extra CSS classes for the text.
 *
 * Usage Example:
 * <Person
 *   orientation="right"
 *   imageProps={{ width: "401", height: "825", imageColor: "#CD82BB", imageClassName: "absolute top-0 left-0" }}
 *   textProps={{
 *     text: "Hello World",
 *     textColor: "white",
 *     x: "50%",
 *     y: "20%",
 *     fontSize: "36px",
 *     fontWeight: "bold",
 *     textMaxWidth: "231px",
 *     textMaxHeight: "121px",
 *     textClassName: "break-all",
 *   }}
 * />
 */

function Person({ orientation = "left", imageProps = {}, textProps = {} }) {
  const {
    width = "401",
    height = "825",
    imageColor = "#CD82BB",
    imageClassName = "",
  } = imageProps;

  const {
    text = "",
    textColor = "black",
    x = "50%",
    y = "20%",
    fontSize = "36px",
    fontWeight = "bold",
    textMaxWidth = "231px",
    textMaxHeight = "121px",
    textClassName = "",
  } = textProps;

  const flipTransform =
    orientation === "right" ? `scale(-1, 1) translate(${-width}, 0)` : "";

  return (
    <div className={`${imageClassName} overflow-visible`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform={flipTransform}>
          <path
            d="M383 133.28C383 215.295 241.5 298.28 241.5 298.28C241.5 298.28 156 340.78 118 298.28C95.7529 283.756 109.209 236.558 89.9997 214.78C69.1115 191.1 40.2047 219.869 60 192.78C98 140.78 59.9997 26.3041 142 6.78029C268 -23.2198 383 51.2661 383 133.28Z"
            fill={imageColor}
          />
          <path
            d="M174 306.78C186.5 386.28 18 655.5 0.5 824.5H401C363.5 487 292 386.78 292 252.78C292 195.725 161.5 227.28 174 306.78Z"
            fill={imageColor}
          />
        </g>
        {text && (
          <foreignObject
            x={`calc(${x} - ${parseFloat(textMaxWidth) / 2}px)`}
            y={`calc(${y} - ${parseFloat(textMaxHeight) / 2}px)`}
            width={textMaxWidth}
            height={textMaxHeight}
          >
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              className={`text-center text-[${fontSize}] font-${fontWeight} w-full flex items-center justify-center break-words whitespace-normal ${textClassName} `}
              style={{
                color: textColor,
              }}
            >
              {text}
            </div>
          </foreignObject>
        )}
      </svg>
    </div>
  );
}

export default Person;
