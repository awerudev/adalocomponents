import React, { useState } from "react";
import { View, TextInput } from "react-native";

const UltraInput = (props) => {
  const {
    defaultValue,
    placeholder,
    required,
    borderRadius,
    autoCapitalize,
    autoCorrect,    
    inputMode,
    secureTextEntry,
    textAlign,
    enhancements,
    style,
    validation,
    mobile,
  } = props;

  const [borderColor, setBorderColor] = useState(style.borderColor1);
  const [borderWidth, setBorderWidth] = useState(style.defaultBorderWidth);
  const [focus, setFocus] = useState(false);

  const handleChangeText = (val) => {
		defaultValue.onChange(val);
		checkValidation(val, true);
	};

  const handleFocus = (e) => {
		setFocus(true);
		checkValidation(defaultValue.value, true);
	};

  const handleBlur = (e) => {
		// setBorderWidth(style.defaultBorderWidth);
		setFocus(false);
		checkValidation(defaultValue.value, false);
	};

	// Check input regular expression
	function checkValidation(str, focused) {
		if (required && !focused) {
			if (!str) {
				setBorderColor(validation.errorBorderColor);
				return;
			}
		}

		if (str) {
			let replacePattern = validation.pattern.replace(/(^\/+|\/+$)/mg, '');
			const regPattern = new RegExp(replacePattern);
			if (regPattern.test(str)) {
				setBorderColor(validation.validBorderColor);
			} else {
				setBorderColor(validation.errorBorderColor);
			}
		} else {
			setBorderColor(style.borderColor1);
		}
	}

	console.log('================== defaultValue', defaultValue);
	console.log('================== validation.pattern', validation.pattern);

  return (
  	<View
      style={{
        width: "100%",
        height: enhancements.height,
				minHeight: 40,
        borderColor: style.border1? borderColor: 'transparent',
        borderWidth: style.border1? style.borderWidth1: 0,//(focus? style.focusBorderWidth: style.defaultBorderWidth): 0,
        borderRadius: style.border1? style.borderRadius1: 0,
        padding: style.border2? style.borderWidth2: 0,
        backgroundColor: style.border2? style.borderColor2: 0,
        zIndex: 5000,
      }}
    >
			<TextInput
				value={defaultValue.value}
				placeholder={placeholder}
				style={{
					width: "100%",
					height: "100%",
					backgroundColor: style.backgroundColor,					
					borderColor: style.border3? style.borderColor3: 'transparent',
					borderWidth: style.border3? style.borderWidth3: 0,
					borderRadius: style.border3? style.borderRadius3: 0,
					padding: style.padding,
					outlineStyle: 'none',
					textAlign: `${textAlign}`,
				}}
				onChangeText={handleChangeText}
				onFocus={handleFocus}
				onBlur={handleBlur}
				autoCapitalize={autoCapitalize}
				autoComplete={mobile.autoComplete}
				autoCorrect={autoCorrect}
				autoFocus={enhancements.autoFocus}
				editable={enhancements.editable}
				inputMode={inputMode}
				keyboardType={mobile.keyboardType}
				multiline={enhancements.multiLine}
				returnKeyType={mobile.returnKeyType}
				secureTextEntry={secureTextEntry}
				// textAlign={'center'}
			/>
		</View>
  );
};

export default UltraInput;
