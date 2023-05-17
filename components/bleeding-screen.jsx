"use client"

import { cn } from '@/lib/utils';
import React, { useRef, useEffect } from 'react';

const BleedingNoise = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const drawNoise = () => {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
    
      for (let i = 0; i < 1000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 3;
        const gray = Math.floor(Math.random() * 255);
    
        ctx.fillStyle = `rgba(${gray}, ${gray}, ${gray}, 0.3)`;
        ctx.fillRect(x, y, size, size);
      }
    };

    const render = () => {
      drawNoise();
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);


  return (
    <div>
      <canvas ref={canvasRef} className={
      cn(
        'absolute bottom-0 left-0 top-0 right-0 -z-10  h-screen w-screen'
      )
    } />
    </div>
  );
};

// const DynamicMask = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const loadPaper = async () => {
//       const { default: paper } = await import('paper/dist/paper-core');

//       const canvas = canvasRef.current;
//       paper.setup(canvas);

//       const circles = [];
  
//       const addCircle = (x, y) => {
//         const circle = new paper.Path.Circle({
//           center: [x, y],
//           radius: 10,
//           fillColor: 'white',
//         });
//         circle.opacity = 0.8;
//         circles.push(circle);
//       };
  
//       for (let i = 0; i < 50; i++) {
//         addCircle(
//           Math.random() * canvas.width,
//           Math.random() * canvas.height
//         );
//       }
  
//       paper.view.onFrame = (event) => {
//         for (const circle of circles) {
//           circle.radius += 1;
//           circle.opacity -= 0.01;
  
//           if (circle.opacity <= 0) {
//             circle.remove();
//             circles.splice(circles.indexOf(circle), 1);
//             addCircle(
//               Math.random() * canvas.width,
//               Math.random() * canvas.height
//             );
//           }
//         }
//       };
//     };

//     loadPaper();
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="dynamic-mask"
//       resize="true"
//       style={{ width: '100%', height: '100%' }}
//     />
//   );
// };

export { BleedingNoise };


