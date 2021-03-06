import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
            <html lang="en">
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="description" content="SSR React with Next JS" />
                    <meta name="keywords" content="react next ssr" />
                    <meta name="author" content="Adam Carroll" />
                    <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossOrigin="anonymous" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}

export default MyDocument;