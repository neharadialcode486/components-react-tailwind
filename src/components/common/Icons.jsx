const Icon = (props) => {
    const iconList = {

    }
    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && iconList[props.iconName]}
        </span>
    )
}

export default Icon