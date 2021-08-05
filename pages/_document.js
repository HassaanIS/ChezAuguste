// _document is only rendered on the server side and not on the client side:
// event handlers like onClick can't be added to this file

import Document, { Html, Head, Main, NextScript } from "next/document";

class DefaultDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.4/css/bulma.min.css"
          />
              <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="anonymous"
          referrerPolicy="no-referrer"
          rel="stylesheet"></link>
              <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet"/>
          <link rel="stylesheet" href="/static/style.css"  crossOrigin="anonymous"/>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />

          <script
            defer
            src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
          />
        </body>
      </Html>
    );
  }
}

export default DefaultDocument;
