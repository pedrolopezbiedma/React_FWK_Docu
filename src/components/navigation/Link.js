import className from 'classnames'
import useNavigationContext from '../../hooks/useNavigationContext';


const Link = ({ children, pathTo, classNames }) => {
    const { navigateTo } = useNavigationContext();
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