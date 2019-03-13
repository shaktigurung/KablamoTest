import React from 'react';

export const Button = (props) =>
  <button type="button" {...props} className={"btn " + props.className } />;