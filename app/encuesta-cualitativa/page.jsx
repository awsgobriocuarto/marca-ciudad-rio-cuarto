import Script from 'next/script';

export default function Page() {


  return (
    <div className="survey">

      <iframe
        src="https://form.typeform.com/to/vV1AJos4"
        className="typeform"
        style={{ border: "none", borderRadius: "12px" }}
        allow="fullscreen"
        title="City Brand Survey"
        width="100%"
        height="650"
      ></iframe>
    </div>
  );
}