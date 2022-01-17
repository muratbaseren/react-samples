import PropTypes from "prop-types"

function UserDetail({ name, age, hobbies, address }) {
    return (
        <div>
            <h4>{name} ({age})</h4>
            <hr />
            <h5>Hobbies</h5>
            <ul>
                {
                    hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)
                }
            </ul>
            <address>
                <div><b>Address</b></div>
                <div>Detail : {address.detail}</div>
                <div>Zip : {address.zipcode}</div>
            </address>
        </div>
    );
}

UserDetail.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    hobbies: PropTypes.array,
    address: PropTypes.shape({
        detail: PropTypes.string,
        zipcode: PropTypes.number
    })
}

UserDetail.defaultProps = {
    name: "---",
    hobbies: ["hobby 1", "hobby 2"]
}

export default UserDetail;