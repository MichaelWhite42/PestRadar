import classNames from "classnames";
import React from "react";
import style from "./tags.scss"

const Tags = ({tagName}) => {
    return (
        <div className={classNames('', {'tag_red': tagName === 'Fire'}, {'tag': tagName === 'Animals' || tagName === 'Water' || tagName === 'Human' || tagName === 'Fire'})}>
            {tagName}
        </div>
    )
}

export default Tags;