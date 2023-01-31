import React, { useState, useEffect } from "react";

const InvoicePage = () => {
  const [binaryData, setBinaryData] = useState(null);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/pdf")
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        setBinaryData(new Uint8Array(arrayBuffer));
        setSrc(URL.createObjectURL(new Blob([binaryData], { type: "application/pdf" })));
      });
  }, []);

  return (
    <div>
      {src ? (
        <iframe title="Invoice" src={src} style={{ width: "100%", height: "500px" }} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default InvoicePage;
