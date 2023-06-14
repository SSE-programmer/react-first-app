import './sse-button.component.scss'

function SseButton({children}) {
    return (
        <button className="button">
            {children}
        </button>
    )
}

export default SseButton;