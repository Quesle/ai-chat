import React, { useState } from "react";

// import styles from "./index.module.less";
import { Input } from "antd";

export interface TranslationUIProps {
  //   translate?: (val: string) => Promise<string>;
  translate?: (val: string) => void;
}

const TranslationUI: React.FC<TranslationUIProps> = (props) => {
  const { translate } = props;

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <div>
        <Input.Search
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onSearch={() => {
            translate?.(inputValue);
          }}
        />
      </div>
    </div>
  );
};

export default TranslationUI;
