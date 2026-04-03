import { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: string;
}

export function ImageWithFallback({ src, alt, fallback = 'https://placehold.co/600x400?text=No+Image', ...props }: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [error, setError] = useState(false);

  return (
    <img
      {...props}
      src={error ? fallback : imgSrc}
      alt={alt}
      onError={() => {
        setError(true);
        setImgSrc(fallback);
      }}
    />
  );
}
