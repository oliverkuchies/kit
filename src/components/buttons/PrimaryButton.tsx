import React from "react";
import {PrimaryButtonProps} from "@kit/types/PrimaryButton";

export default function PrimaryButton (props: PrimaryButtonProps) {
  const DEFAULT_TW_STYLES = [
      'bg-sky-500',
      'p-2',
      'px-4',
      'rounded',
      'text-white',
      'hover:bg-sky-700'
  ];

  return (
    <button
      className={props.className ? props.className + ' ' : '' + DEFAULT_TW_STYLES.join(' ')}
      onClick={props.onClick}
      type={props.type}>
      {props.children}
    </button>
  );
}