import React from "react";
import {StyleProps} from "@kit/types/Style";

export interface PrimaryButtonProps extends StyleProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    type?: "button";
}