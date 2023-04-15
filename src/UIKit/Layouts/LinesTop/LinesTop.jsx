import './LinesTop.css'

export const LinesTop = (props) => {
    return (
        <div className="LinesTop">
            {props.children}
        </div>
    )
}
//all children inside it will be under classname Line
export default LinesTop;