import './Line.css'

export const Line = (props) => {
    return (
        <div className="Line">
            {props.children}
        </div>
    )
}
//all children inside it will be under classname Line
export default Line;