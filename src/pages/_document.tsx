import { Html, Main, NextScript, Head } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Software Engineer specializing in scalable fullstack web applications and cloud architecture"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="software engineer, full stack developer, React, Node.js, AWS, cloud architecture"
        />
        <meta name="author" content="Abdel Altarazi" />
        <meta property="og:title" content="Abdel Altarazi - SoftwareEngineer" />
        <meta
          property="og:description"
          content="Portfolio showcasing my work as a fullstack engineer specializing in scalable web applications"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
