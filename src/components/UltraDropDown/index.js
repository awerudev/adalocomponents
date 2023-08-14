import React, { useState } from "react";
import { View } from "react-native";

const UltraDropDown = (props) => {
  const {
    placeholder,
    listItems,
    color,
    fontSize,
    fontWeight,
    backgroundColor,
    textAlign,
    disabled,
    border1,
    border2,
    border3,
  } = props;

  const [value, setValue] = useState();

  console.log(listItems);

  return (
    <View
      style={{
        width: "100%",
        height: 40,
        borderColor: border1.borderColor,
        borderWidth: border1.borderWidth,
        borderRadius: border1.borderRadius,
        padding: border2.borderWidth,
        backgroundColor: border2.borderColor,
        zIndex: 5000,
      }}
    >
      <select
        style={{
          width: "100%",
          height: "100%",
          color: color,
          fontSize: fontSize,
          fontWeight: fontWeight,
          textAlign: textAlign,
          backgroundColor: backgroundColor,
          borderColor: border3.borderColor,
          borderWidth: border3.borderWidth,
          borderRadius: border3.borderRadius,
          paddingRight: 12,
          appearance: 'none',
        }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={disabled}
      >
        <option value="" style={{ backgroundColor: "#ffffff", color: "#000000", fontSize: fontSize }}>
          {placeholder}
        </option>
        {listItems &&
          listItems.map((item) => (
            <option value={item.id} style={{ backgroundColor: "#ffffff", color: "#000000", fontSize: fontSize }}>
              {item.label}
            </option>
          ))}
      </select>
    </View>
  );
};

export default UltraDropDown;
