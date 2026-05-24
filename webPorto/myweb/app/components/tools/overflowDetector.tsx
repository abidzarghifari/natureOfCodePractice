"use client"

import { useEffect } from 'react';

export default function OverflowDetector() {
  useEffect(() => {
    // Fungsi untuk mengecek elemen yang melebihi lebar layar
    const checkOverflow = () => {
      const docWidth = document.documentElement.offsetWidth;
      
      console.log(`--- Checking Overflow (Viewport Width: ${docWidth}px) ---`);
      
      const allElements = document.querySelectorAll('*');
      let found = false;

      allElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        
        // Jika lebar elemen > lebar layar atau posisi kanannya melebihi layar
        if (rect.right > docWidth || el.offsetWidth > docWidth) {
          found = true;
          console.warn('Elemen Penyebab Overflow:', el);
          
          // Memberikan outline merah agar terlihat jelas di layar
          el.style.outline = '2px solid red';
          el.style.backgroundColor = 'rgba(255, 0, 0, 0.1)';
        }
      });

      if (!found) {
        console.log('Aman! Tidak ada elemen yang overflow.');
      }
    };

    // Jalankan saat pertama kali render
    checkOverflow();

    // Jalankan ulang saat jendela di-resize (opsional)
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  return null; // Komponen ini tidak merender apapun ke UI
}