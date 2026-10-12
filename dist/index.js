import * as React from 'react';
import { jsx } from 'react/jsx-runtime';

var Button = React.forwardRef(
  ({ variant = "primary", className, ...props }, ref) => /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      className: `ds-button ds-button--${variant} ${className ?? ""}`,
      ...props,
      children: props.children
    }
  )
);
Button.displayName = "Button";
var Input = React.forwardRef(
  ({ variant = "primary", className, ...props }, ref) => /* @__PURE__ */ jsx(
    "input",
    {
      ref,
      className: `ds-input ds-input--${variant} ${className ?? ""}`,
      ...props
    }
  )
);
Input.displayName = "Input";

export { Button, Input };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map