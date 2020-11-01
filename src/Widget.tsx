import React from 'react';

type WidgetProps = {
  title: string;
  children: React.ReactNode;
  className: string;
};

export function Widget(props: WidgetProps): JSX.Element {
  return (
    <div className={`widget ${props.className}`}>
      <h2 className="widget-title">{props.title}</h2>
      {props.children}
    </div>
  );
}
