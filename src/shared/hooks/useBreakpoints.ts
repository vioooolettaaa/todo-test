import { useEffect, useState } from 'react';

export default function useBreakpoints() {
  const [pageWidth, setPageWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = pageWidth <= 767;
  const isTablet = pageWidth >= 768 && pageWidth <= 1024;
  const isDesktop = pageWidth >= 1025 && pageWidth <= 1280;
  const isLargeDesktop = pageWidth >= 1281;

  return { pageWidth, isMobile, isTablet, isDesktop, isLargeDesktop };
}
