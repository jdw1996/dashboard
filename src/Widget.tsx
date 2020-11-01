import React from 'react';

type WidgetProps = {
  title: string;
  children: React.ReactNode;
};

export function Widget(props: WidgetProps): JSX.Element {
  return (
    <div className="widget">
      <h2 className="widget-title">{props.title}</h2>
      {props.children}
    </div>
  );
}
