import * as React from "react";
import { Button, FluentProvider, makeStyles, tokens, useId, webLightTheme } from "@fluentui/react-components";

interface ButtonControlProps {
  callback: () => void;
  disabled: boolean;
  displayText: string;
}

export const ButtonControl = (props: ButtonControlProps): JSX.Element => {
  const buttonClick = () => {
    props.callback();
  };

  return (
    <FluentProvider theme={webLightTheme} style={{ width: "100%", display: "flex", flexDirection: "row", gap: "5px" }}>
      <Button aria-labelledby={props.displayText} aria-label={props.displayText} appearance="primary" onClick={buttonClick} disabled={props.disabled}>
        {props.displayText}
      </Button>
    </FluentProvider>
  );
};
