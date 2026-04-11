import styled from "styled-components";

const Overlay = styled.div`
    position: fixed;
    z-index: 10;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.5s ease-in-out;

    opacity: ${(props) => (props.$isToast ? "1" : "0")};
    pointer-events: ${(props) => (props.$isToast ? "auto" : "none")};
`;

const ToastBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 40px;
    height: 44px;

    background: white;
    border: 1px solid black;
    font-weight: bold;
    font-size: 0.8rem;

    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
`;

export default function Toast({ isToast, message }) {
    return (
        <Overlay $isToast = {isToast}>
            <ToastBox>{message}</ToastBox>
        </Overlay>
    );
}