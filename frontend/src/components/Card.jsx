import {Link} from "react-router-dom"

export const Card = ({label, to}) => {
    return (
        <Link to={to}>
            <div className="rounded-lg bg-slate-100 h-44 w-44 p-8 shadow-lg drop-shadow-lg text-center hover:shadow-xl transition duration-300 transform hover:scale-110">
                <div className="font-bold text-xl text-blue-600">{label}</div>
            </div>
        </Link>
    )
}
