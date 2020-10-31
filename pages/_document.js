import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="text-greyishBrownTwo antialiased">
        <Head />
        <body className="min-h-screen bg-white">
          <Main />
          <NextScript />
        </body>

        <svg xmlns="http://www.w3.org/2000/svg" className="hidden absolute">
          <symbol viewBox="0 0 8.09 16.37" id="arrow">
            <title>arrow</title>
            <path d="M4.95 10.47V0h-2v10.47H0l4.05 5.9 4.05-5.9H4.95z" />
          </symbol>
        </svg>
      </Html>
    );
  }
}

export default MyDocument;
