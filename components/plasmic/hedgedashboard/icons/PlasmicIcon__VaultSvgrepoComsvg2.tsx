// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type VaultSvgrepoComsvg2IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function VaultSvgrepoComsvg2Icon(props: VaultSvgrepoComsvg2IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.585 13.524c.264-.447.415-.968.415-1.524s-.151-1.077-.415-1.524L17.78 9.28a.75.75 0 00-1.06-1.06l-1.196 1.195A2.986 2.986 0 0014 9c-.556 0-1.077.151-1.524.415L11.28 8.22a.75.75 0 10-1.06 1.06l1.195 1.196A2.985 2.985 0 0011 12c0 .556.151 1.077.415 1.524L10.22 14.72a.75.75 0 101.06 1.06l1.196-1.195c.447.264.968.415 1.524.415s1.077-.151 1.524-.415l1.196 1.195a.75.75 0 101.06-1.06l-1.195-1.196zM14 13.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM6.5 7.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M2 7.75A3.75 3.75 0 015.75 4h12.5A3.75 3.75 0 0122 7.75v8.5A3.75 3.75 0 0118.25 20H5.75A3.75 3.75 0 012 16.25v-8.5zM5.75 5.5A2.25 2.25 0 003.5 7.75v8.5a2.25 2.25 0 002.25 2.25h12.5a2.25 2.25 0 002.25-2.25v-8.5a2.25 2.25 0 00-2.25-2.25H5.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default VaultSvgrepoComsvg2Icon;
/* prettier-ignore-end */
