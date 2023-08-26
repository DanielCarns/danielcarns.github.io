import { useEffect } from 'react';

type ResizeCallback = () => void;

function useOnResize(callback: ResizeCallback): void {
  useEffect(() => {
    callback();

    function handleResize() {
      callback();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [callback]);
}

export default useOnResize;
