import React from 'react';

export const PanelHeading = (props) => (
  <div className="panel-heading clearfix" {...props}>
    {props.children}
  </div>
)
