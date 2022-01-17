
const text1 = "Hello";
const text2 = "World!";
const reverse = true;

function Variables() {
    return (
        <>
            {/* {text1} {text2} */}
            {/* {`Title : ${text1} ${text2}`} */}

            {/* {!reverse && `Title : ${text1} ${text2}`} */}
            {/* {reverse && `Title : ${text2} ${text1}`} */}

            {/* {reverse
                ? `${text2} ${text1}`
                : `${text1} ${text2}`
            } */}

            {reverse
                ? text2 + " " + text1
                : text1 + " " + text2
            }
        </>
    );
}

export default Variables;