import React from 'react';

export const PanelBody = (props) => (
  <div className="panel-body" {...props}>
    {props.children}
  </div>
)
