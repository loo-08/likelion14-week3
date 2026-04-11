function Button({text}) {
    return (
        <button
            style = {{
                width: '450px',
                padding: '16px',
                backgroundColor: '#C6E400',
                border: '1px solid black',
                fontSize: '18px',
                fontWeight: 'bold',
                borderRadius: '10px',
                cursor: 'wait',
            }}
        >
            {text}
        </button>
    );
}

export default Button;