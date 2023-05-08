import React, { useState } from "react";
import "./SpinTransition.css";

type Props = {
    icon1: React.ReactNode;
    icon2: React.ReactNode;
};

export const SpinTransition = ({ icon1, icon2 }: Props) => {
    const [shownIcon, setShownIcon] = useState<React.ReactNode>(icon1);

    const onHover = () => {
        setTimeout(() => {
            setShownIcon(icon2);
        }, 50);
    };

    const onLeave = () => {
        setTimeout(() => {
            setShownIcon(icon1);
        }, 50);
    };

    return (
        <div className="spin">
            <figure onMouseEnter={onHover} onMouseLeave={onLeave}>
                {shownIcon}
            </figure>
        </div>
    );
};
