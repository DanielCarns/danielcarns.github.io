import React from "react";

export type ProgressiveImgReturn = [string, { blur: boolean }];

const useProgressiveImg = (lowQualitySrc: string, highQualitySrc: string): ProgressiveImgReturn => {
  const [src, setSrc] = React.useState(lowQualitySrc);
  React.useEffect(() => {
    setSrc(lowQualitySrc);
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);
  return [src, { blur: src === lowQualitySrc }];
};

export default useProgressiveImg;