import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage<{ date: string }> = ({ date }) => {
  const revalidate = async () => {
    const response = await fetch("/api/revalidate?secret=VerySecretToken");
    const body = await response.json();

    if (body.revalidated) {
      window.location.reload();
    } else {
      console.log("Something went wrong");
    }
  };

  return (
    <>
      <Head>
        <title>Next ISR test</title>
      </Head>
      <main>
        <h1>👋 Freshly rendered for you</h1>
        <br />
        on {date}
        <br />
        <button className="btn" onClick={revalidate}>
          Revalidate now
        </button>
      </main>
      <style jsx>
        {`
          :global(body) {
            display: flex;
            font-family: system-ui;
            align-items: center;
            justify-content: center;
            height: 90vh;
            text-align: center;
            background: #337;
            color: #ddd;
          }
          .btn {
            display: inline-block;
            margin-top: 10px;
            padding: 2px 6px;
            background-color: white;
            color: #337;
            border-radius: 1rem;
            text-decoration: none;
            font-weight: bold;
          }
        `}
      </style>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const date = new Date().toUTCString();
  return {
    props: { date },
    revalidate: false, // only update with on demand revalidation
  };
}
