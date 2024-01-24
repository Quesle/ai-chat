"use client";
import React from "react";
import TranslationUI from "./components/TranslationUI";

import { translate as doTranslate } from "@/services/baiduFanyi";
import Head from "next/head";

// export const metadata = {
//   referrer: 'never'
// }

const Translation = () => {
  const translate = async (val: string) => {
    console.log(val);
    await doTranslate(val);
  };
  console.log("==casdklalsdjcs");
  return (
    <div>
      <Head>
        <title>翻译</title>
        <meta name="referrer" content="never" />
      </Head>
      <button onClick={() => translate("apple")}>click</button>
      <TranslationUI translate={translate} />
    </div>
  );
};

export default Translation;
