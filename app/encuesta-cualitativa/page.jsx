'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.handleTypeformReady = () => {
      setLoading(false);
    };

    return () => {
      delete window.handleTypeformReady;
    };
  }, []);

  return (
    <div className="survey">
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />



      <iframe
        src="https://form.typeform.com/to/vV1AJos4"
        className="typeform"
        style={{ border: "none", borderRadius: "12px" }}
        allow="fullscreen"
        title="City Brand Survey"
      ></iframe>
    </div>
  );
}