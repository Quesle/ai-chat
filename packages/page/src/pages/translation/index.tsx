import Head from "next/head";
import { default as TranslationUI } from "../../views/translation";
import { Card } from "@arco-design/web-react";

const Translation = () => {
  return (
    <>
      <Head>
        <title>翻译</title>
      </Head>
      <Card>
        <TranslationUI />
      </Card>
    </>
  );
};

export default Translation;
