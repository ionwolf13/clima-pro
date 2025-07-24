import './ReuseContainer.css'

export const ReuseContainer = (props) => {

    return (
        <div className={`reusable-container ${props.className}`} style={{...props.styling}}>
            {props.children}
        </div>
    )
}