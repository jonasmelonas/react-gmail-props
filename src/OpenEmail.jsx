
const OpenEmail = (props) => {


    return (
        <div>
            <button onClick={() => props.updateOpenEmail(null)}>back</button>
            <div>
                <h3>From: {props.email.sender}</h3>
                <h2>{props.email.title}</h2>
            </div>
        </div>
    )
}

export default OpenEmail