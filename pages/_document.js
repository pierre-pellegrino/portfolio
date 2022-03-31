import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
              rel="preload"
              href="/fonts/Sequel_Demo.ttf"
              as="font"
              crossOrigin=""
            />

          <link 
            href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;700&display=swap" 
            rel="stylesheet"
          /> 
            
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument