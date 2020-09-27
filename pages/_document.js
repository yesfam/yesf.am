import Document, { Html, Main, Head, NextScript } from 'next/document'
import Footer from "components/footer"

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-black text-white">
          <Main />
          <NextScript />
        </body>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(f, a, t, h, o, m){
          	a[h]=a[h]||function(){
          		(a[h].q=a[h].q||[]).push(arguments)
          	};
          	o=f.createElement('script'),
          	m=f.getElementsByTagName('script')[0];
          	o.async=1; o.src=t; o.id='fathom-script';
          	m.parentNode.insertBefore(o,m)
          })(document, window, '//analytics.max.berlin/tracker.js', 'fathom');
          fathom('set', 'siteId', 'FHDLF');
          fathom('trackPageview');
        `}} />
      </Html>
    )
  }
}
