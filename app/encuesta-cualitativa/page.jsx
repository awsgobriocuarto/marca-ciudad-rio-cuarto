// app/page.js

'use client';

// 1. Importa los hooks necesarios
import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Page() {
  // 2. Estado para la carga y una referencia para el div
  const [loading, setLoading] = useState(true);
  const typeformRef = useRef(null); // Referencia para nuestro div

  // 3. Efecto que configura el observador
  useEffect(() => {
    if (typeof window !== 'undefined' && typeformRef.current) {
      const observer = new MutationObserver((mutationsList) => {
        for (const mutation of mutationsList) {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'data-tf-loaded'
          ) {
            // --- INICIO DE LA CORRECCIÓN ---
            // Se elimina la sintaxis de TypeScript `(mutation.target as HTMLElement)`
            // `mutation.target` ya es el elemento correcto en JavaScript.
            const isLoaded = mutation.target.getAttribute('data-tf-loaded') === 'true';
            // --- FIN DE LA CORRECCIÓN ---

            if (isLoaded) {
              setLoading(false);
              observer.disconnect();
              return;
            }
          }
        }
      });

      observer.observe(typeformRef.current, { attributes: true });

      return () => observer.disconnect();
    }
  }, []);
  return (
    <>
      <Script src="//embed.typeform.com/next/embed.js" />

      <section className="hero">
        <div className="container">
          <div className="hero-content text-center">
            {/* ... tu contenido se mantiene igual ... */}
            <div className="row justify-content-center">
              <div className="col-md-6">
                <p className="text-top">
                  MARCA CIUDAD <span>RÍO CUARTO</span>
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <h1 className="display-1">
                  Construyamos juntos nuestra <span>Marca Ciudad.</span>
                </h1>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-8 col-md-4">
                <p className="lead mt-3">
                  Destinado a: referentes y líderes de opinión
                </p>
              </div>
            </div>

            <div className="survey">
              {/* 4. Lógica de carga */}
              {loading && <p>Cargando encuesta...</p>}

              {/* 5. El div de Typeform ahora tiene la `ref` y un estilo para ocultarse */}
              <div
                ref={typeformRef} // Enlazamos la referencia aquí
                data-tf-live="01JZ5ZRXNV7CNN8E91CRE8QTXQ"
                style={{ display: loading ? 'none' : 'block' }}
              />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}