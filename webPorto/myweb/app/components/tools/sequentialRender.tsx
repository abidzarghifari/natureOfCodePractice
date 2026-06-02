"use client"

import { useState, useEffect, useRef } from 'react';

export function useSequentialRender<T>(fullArray: T[], delay: number = 700): T[] {
  const [renderedItems, setRenderedItems] = useState<T[]>([]);
  
  // Menggunakan ref untuk menyimpan urutan agar tidak terpengaruh re-render luar
  const currentIndexRef = useRef(0);

  useEffect(() => {
    // Hanya reset jika array kosong atau jumlah elemen berkurang (reset manual)
    if (fullArray.length === 0) {
      setRenderedItems([]);
      currentIndexRef.current = 0;
      return;
    }

    // Jika proses sequential sudah selesai dan jumlah data sama, jangan diulang
    if (currentIndexRef.current >= fullArray.length) return;

    const intervalId = setInterval(() => {
      if (currentIndexRef.current < fullArray.length) {
        const nextItem = fullArray[currentIndexRef.current];
        
        setRenderedItems((prev) => [...prev, nextItem]);
        currentIndexRef.current++;
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, [fullArray.length, delay]); // <- Cukup awasi .length-nya saja agar lebih stabil

  return renderedItems;
}