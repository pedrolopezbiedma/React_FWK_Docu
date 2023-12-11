import { useContext } from "react";
import className from 'classnames'

import NavigationContext from "../context/NavigationContext";

const Link = ({ children, pathTo, classNames }) => {
    const { navigateTo } = useContext(NavigationContext);
    const finalClassName = className(classNames, 'text-blue-500');

    const handleClick = (event) => {
        event.preventDefault();
        navigateTo(pathTo)
    }

    return(
        <a className={finalClassName} onClick={handleClick}>{ children }</a>
    )
}

export default Link;