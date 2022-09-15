import Head from "next/head";
import Header from "./Header";
import Nav from "./Nav";

type LayoutProps = {
  heading: string;
  content: string;
  children: React.ReactNode;
};

export default function Layout({ heading, content, children }: LayoutProps) {
  const title = "LexDAO - " + heading;

  return (
    <div className="relative min-h-screen flex flex-col space-between align-center">
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {children}
      <Nav />
    </div>
  );
}
