import React, { useEffect, useState } from 'react';
import "./style.css";
function RadioBtn({
  ltr,
  label,
  className,
  setValue,
  value,
  checkedColor,
  checked
}) {
  const [checkedValue, setCheckedValue] = useState("//*//");

  useEffect(() => {
    if (checkedValue != "//*//") {
      setValue(checkedValue);
    }
  }, [checkedValue]);

  useEffect(() => {
    if (checkedColor) {
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>:root{--checked-color:${checkedColor}}</style>`
      );
    } else {
      document.head.insertAdjacentHTML(
        "beforeend",
        `<style>:root{--checked-color:#ff5900}</style>`
      );
    }
  }, [checkedColor]);
  return (
    <div
      className={!className ? ltr ? "mr_radios mr_radios_rtl" : "mr_radios" : "mr_radios " + className}
      onClick={() => setValue(value)}
    >
      {ltr ? (
        <>
          <span
            className={
              checked == value
                ? "mr_chckBox_radios checked"
                : "mr_chckBox_radios mr_chckBox_radios"
            }
          ></span>
          <span className="mr_label_radios">{label}</span>
        </>
      ) : (
        <>
          <span className="mr_label_radios">{label}</span>
          <span
            className={
              checked == value
                ? "mr_chckBox_radios checked"
                : "mr_chckBox_radios"
            }
          ></span>
        </>
      )}
    </div>
  );
}

export default RadioBtn;
