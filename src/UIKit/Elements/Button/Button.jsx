import './Button.css'
import Center from '../../Layouts/Center/Center'

export const Button = (props) => {
    return (
        <button className ='Btn' onClick={props.onClick}>
            <Center>
                {props.children}
            </Center>
        </button>
    )

}

export default Button;