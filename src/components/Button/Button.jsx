import React, { Component } from 'react';
import style from './button.module.scss';

export function Button({
  type,
  btnclass,
  icon,
  title,
  onclick,
  still,
}) {
  return (
    <div className={classNames(style.button)}>
      <div>Button</div>
      <h1>Lorem, ipsum.</h1>
    </div>
  );
}
