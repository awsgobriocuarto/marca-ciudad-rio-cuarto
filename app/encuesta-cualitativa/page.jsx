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
    <>
      <Script src="//embed.typeform.com/next/embed.js" strategy="afterInteractive" />

      {loading && (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <div className="d-flex align-items-center">
            <div className="spinner-border text-primary" role="status" aria-hidden="true"></div>
            <strong className="ms-3">Cargando encuesta...</strong>
          </div>
        </div>
      )}

      <div
        data-tf-live="01JXD1KDJWEK70MRVJR0FRPCZV"
        data-tf-on-ready="handleTypeformReady"
        style={{
          display: loading ? 'none' : 'block'
        }}
      ></div>
    </>
  );
}