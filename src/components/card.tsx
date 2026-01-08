// import { Fragment } from "react";

import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

function Card(props: Props) {
    const { children } = props;
    return ( 
        <div className="card" style= {{
        width: "350px",
    }}>
            <div className="card-body">{children}</div>
        </div>
    );
}


interface CardBodyProps {
    title: string;
    text?: string; // Optional prop signo de pregunta
}
export function CardBody(props: CardBodyProps) {
    const {title, text } = props;
    return (
        <>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
            
        </>
    );
}
export default Card;