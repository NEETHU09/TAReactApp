// import React, { useState, useEffect } from 'react';

// export default function Test() {
//   const [binaryData, setBinaryData] = useState(null);
//   const [pdfBlob, setPdfBlob] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('http://localhost:8080/pdf');
//       const binaryData = await response?.arrayBuffer();
//       setBinaryData(binaryData);
//     }

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (!binaryData) {
//       return;
//     }

//     const blob = new Blob([binaryData], { type: 'application/pdf' });
//     setPdfBlob(URL.createObjectURL(blob));
//   }, [binaryData]);

//   if (!pdfBlob) {
//     return null;
//   }

//   return (
//     <div>
//       <object data={pdfBlob} type="application/pdf" style={{ width: '100%', height: '100%' }} />
//     </div>
//   );
// }

