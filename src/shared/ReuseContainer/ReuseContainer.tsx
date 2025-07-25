import './ReuseContainer.css'

export const ReuseContainer: React.FC<any> = (props) => {

    return (
        <div className={`reusable-container ${props.className}`} style={{...props.styling}}>
            {props.children}
        </div>
    )
}