const Icon = (props) => {
    const iconList = {
        downIcon: (
            <svg width="19" height="12" viewBox="0 0 19 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.89125 0.509098C2.23875 -0.165902 1.15875 -0.165901 0.506249 0.486599C-0.16875 1.1616 -0.16875 2.2191 0.506249 2.8716L8.31374 10.7241C8.62874 11.0391 9.05624 11.2191 9.50624 11.2191C9.95623 11.2191 10.3837 11.0391 10.6987 10.7241L18.5062 2.8716C18.8437 2.5566 19.0012 2.1291 19.0012 1.7016C19.0012 1.2516 18.8437 0.824099 18.5062 0.486599C17.8312 -0.165901 16.7737 -0.165902 16.1212 0.509098L9.50624 7.1466L2.89125 0.509098Z" fill="#3C278D" />
            </svg >
        ),
    }
    return (
        <span className={`flex ${props.className}`}>
            {props.iconName && iconList[props.iconName]}
        </span>
    )
}

export default Icon