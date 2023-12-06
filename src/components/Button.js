const Button = ({ 
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outlined,
    rounded 
}) => {
    console.log('-------------------')
    console.log('Primary is -->', primary)
    console.log('Secondary is -->', secondary)
    console.log('Success is -->', success)
    console.log('Warning is -->', warning)
    console.log('Danger is -->', danger)
    console.log('Outlined is -->', outlined)
    console.log('Rounded is -->', rounded)

    return(
        <div>
            <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white"> { children } </button>
        </div>
    )
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger}) => {
        const sum = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

        if(sum > 1){
            return Error('Invalid props set up')
        }
    }
}

export default Button