import { Button, Input, Select, Space, Grid } from "@arco-design/web-react";
import { IconSwap } from "@arco-design/web-react/icon";
import React, { useState } from "react";

import { get } from "lodash";

const Row = Grid.Row;
const Col = Grid.Col;

export interface TransOptions {
  q: string;
}

export interface TranslationUIProps {
  trans?: (options: TransOptions) => void;
}

export enum LANGUAGE {
  EN = "en",
  ZH = "zh",
}

const TranslationUI: React.FC<TranslationUIProps> = (props) => {
  const [from, setFrom] = useState(LANGUAGE.EN);
  const [to, setTo] = useState(LANGUAGE.ZH);
  const [inputValue, setInputValue] = useState("");
  const [resultValue, setResultValue] = useState("");

  const onChangeFrom = (val: string) => {
    if (val === LANGUAGE.EN) {
      setFrom(LANGUAGE.EN);
      setTo(LANGUAGE.ZH);
    } else {
      setFrom(LANGUAGE.ZH);
      setTo(LANGUAGE.EN);
    }
  };

  const onChangeTo = (val: string) => {
    if (val === LANGUAGE.EN) {
      setFrom(LANGUAGE.ZH);
      setTo(LANGUAGE.EN);
    } else {
      setFrom(LANGUAGE.EN);
      setTo(LANGUAGE.ZH);
    }
  };

  const trans = async () => {
    if (!inputValue) {
      return;
    }
    const res = await fetch(`/api/fanyi?q=${inputValue}&from=${from}&to=${to}`);
    const value = await res.json();
    console.log(value);
    setResultValue(get(value, "trans_result.[0].dst"));
  };

  return (
    <div>
      <div>
        <Space>
          <Select value={from} onChange={onChangeFrom}>
            <Select.Option value={LANGUAGE.ZH}>中文</Select.Option>
            <Select.Option value={LANGUAGE.EN}>英语</Select.Option>
          </Select>
          <IconSwap />
          <Select value={to} onChange={onChangeTo}>
            <Select.Option value={LANGUAGE.ZH}>中文</Select.Option>
            <Select.Option value={LANGUAGE.EN}>英语</Select.Option>
          </Select>
          <Button onClick={trans} type="primary">
            翻译
          </Button>
        </Space>
      </div>
      <Row className="border border-inherit mt-4 bg-slate-50">
        <Col span={12} className="bg-white">
          <Input.TextArea
            value={inputValue}
            style={{
              backgroundColor: "#ffffff",
              minHeight: 100,
              minWidth: 200,
            }}
            maxLength={2000}
            placeholder="请输入文字"
            onChange={(e) => {
              setInputValue(e);
              setResultValue("");
            }}
          />
          <div className="h-6">
            <span className="float-end">{`${
              inputValue.length || 0
            }/2000`}</span>
          </div>
        </Col>
        <Col span={12} className="h-full p-2">
          <div className="h-full w-full">{resultValue}</div>
        </Col>
      </Row>
    </div>
  );
};

export default TranslationUI;
