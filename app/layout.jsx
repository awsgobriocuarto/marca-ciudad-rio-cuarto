import { GoogleTagManager } from "@next/third-parties/google";
import { ModalProvider } from "@/context/ModalContext";
import SurveyModal from "@/ui/SurveyModal";
import sfCompact from "@/lib/fonts";
import "@/styles/app.scss";
import Script from "next/script";

export const metadata = {
  title: "Marca Ciudad Río Cuarto – Construyamos juntos nuestra identidad",
  description:
    "Participá en la creación de la Marca Ciudad de Río Cuarto: encuesta rápida para definir su identidad estratégica, cultural y turística.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={sfCompact.variable}>
      <meta property="og:title" content="Marca Ciudad Río Cuarto" />
      <meta
        property="og:description"
        content="Participá en la creación de la Marca Ciudad de Río Cuarto: encuesta rápida para definir su identidad estratégica, cultural y turística."
      />
      <meta property="og:image" content="URL-de-imagen-destacada.jpg" />

      {/* Font Awesome CDN */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/js/all.min.js" />

      {process.env.NODE_ENV === "production" && (
        <GoogleTagManager gtmId="GTM-5RKG87PJ" />
      )}

      <body cz-shortcut-listen="true">
        <ModalProvider>
          {children}
          <SurveyModal />
        </ModalProvider>
      </body>
    </html>
  );
}
