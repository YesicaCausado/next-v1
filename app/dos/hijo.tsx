interface Props {
    children: React.ReactNode;
}

export default function Hijo ({children}: Props) {


    return(
        <div>
            {children}
        </div>
    );
}