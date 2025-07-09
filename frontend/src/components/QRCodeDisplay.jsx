import React, { useState } from 'react';
import QRCode from 'react-qr-code';

const QRCodeDisplay = ({ url }) => {
  const [hovered, setHovered] = useState(false);

  if (!url) return null;

  return (
    <div
      className="flex flex-col items-center mt-4 relative cursor-pointer group"
      onClick={() => window.open(url, '_blank')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* QR Code */}
      <QRCode value={url} size={128} />

      {/* Faded URL on hover */}
      <div
        className={`absolute bottom-[-28px] text-xs text-blue-600 transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {url}
      </div>
    </div>
  );
};

export default QRCodeDisplay;


