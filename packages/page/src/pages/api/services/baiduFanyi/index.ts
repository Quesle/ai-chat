/**
 * 接入百度翻译API
 *
 * 开发者控制台（查询APP ID和Key）
 * https://fanyi-api.baidu.com/manage/developer
 *
 * 开发者文档 （查询API使用）
 * https://fanyi-api.baidu.com/doc/21
 */

// import { createFormDataFromJson } from "@/utils/formData";
// import axios, { AxiosResponse } from "axios";
import md5 from "crypto-js/md5";

const APP_ID = "20240120001946711";
const APP_KEY = "YVOxvc4szQepx_TZL1Y2";
const API_URL = "http://api.fanyi.baidu.com/api/trans/vip/translate";

const generateSign = (val: string, salt: number | string) => {
  const q = val;
  const string1 = `${APP_ID}${q}${salt}${APP_KEY}`;
  return md5(string1);
};

export interface TransQuery {
  q: string;
  from?: string;
  to?: string;
}

export const translate = async (query: string | TransQuery) => {
  const salt = `1705746815447`;
  let fixedQuery: TransQuery = { q: "" };
  if (typeof query === "string") {
    fixedQuery = {
      q: query,
      from: "en",
      to: "zh",
    };
  } else {
    fixedQuery = query;
  }

  const params: { [key: string]: any } = {
    q: fixedQuery.q,
    from: fixedQuery.from || "en",
    to: fixedQuery.to || "zh",
    appid: APP_ID,
    salt,
    sign: generateSign(fixedQuery.q, salt),
  };

  // const formData = createFormDataFromJson(params);

  //   return axios.post(API_URL, formData, {
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //   });
  //   const res = await axios
  //     .get(API_URL, {
  //       params,
  //       headers: {
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE",
  //         "Access-Control-Allow-Headers": "Content-Type",
  //         referer: "never",
  //       },
  //     })
  //     .catch((err) => console.log(err));
  //   console.log(res);

  let content = "";
  Object.keys(params).forEach((key: string, index: number) => {
    if (index === 0) {
      content += `?${key}=${params[key]}`;
    } else {
      content += `&${key}=${params[key]}`;
    }
  });

  try {
    const url = `${API_URL}${content}`;
    // const url = "http://dev-ga.growingio.cn/api/backend/enterprise";
    const res = await fetch(url, {
      cache: "no-store",
      method: "GET",
      keepalive: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods":
          "GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH",
      },
    });
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // console.log(res);
    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("cccc111", err);
  }
};

export default translate;
