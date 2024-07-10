import { type NextPage } from "next";
import Head from "next/head";
import {send} from "../client";



const Root: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alchemy D-🅰️-🅰️-PP</title>
        <meta name="description" content="Alchemy D🅰️🅰️pp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <button onClick={()=> send('0x', 1)}>Test</button>
      </main>
    </>
  );
};

export default Root;
