import React from "react";

export interface FrostedGlassProps {
  blur?: number | string;
  style?: React.CSSProperties;
  disabled?: boolean;
  children?: React.ReactNode;
}

// interface ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> {
//   type: T;
//   props: P;
//   key: Key | null;
// }

/**
 * 毛玻璃效果
 * @param param0
 * @returns
 */
const FrostedGlass: React.FC<FrostedGlassProps> = (props) => {
  const { disabled, blur, style } = props;
  return disabled ? null : (
    <div
      style={{
        backgroundColor: "transparent",
        zIndex: 100,
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        width: "100%",
        height: "100%",
        ...style,
        backdropFilter: `blur(${String(blur || "").replace("px", "") || 10}px)`,
      }}
    />
  );
};

export default FrostedGlass;
