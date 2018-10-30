import React from 'react';

export const Panel = (props) => (
  <div className="panel panel-primary" {...props}>
    {props.children}
  </div>
)
