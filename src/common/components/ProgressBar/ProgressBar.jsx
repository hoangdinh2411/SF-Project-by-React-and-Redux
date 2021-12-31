function ProgressBar({value, message}) {
    return (
        <div >
            <progress value={value}  max="100">{value}</progress>
            <span>{message}</span>
        </div>
    )
}

export default ProgressBar