function Props({ name, surname, age, developer, info }) {
    return (
        <div>
            <ul>
                {/* <li>{props.name}</li> */}
                {/* <li>{props.surname}</li> */}
                {/* <li>{props.age}</li> */}
                {/* <li>{props.developer.toString()}</li> */}
                {/* <li>{props.developer ? "developer" : "..."}</li> */}
                {/* <li>{props.info.title}</li> */}
                {/* <li>{props.info.desc}</li> */}

                <li>{name}</li>
                <li>{surname}</li>
                <li>{age}</li>
                {/* <li>{props.developer.toString()}</li> */}
                <li>{developer ? "developer" : "..."}</li>
                <li>{info.title}</li>
                <li>{info.desc}</li>
            </ul>
        </div>
    );
}

export default Props;