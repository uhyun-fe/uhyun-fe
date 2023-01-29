import { Link } from "@remix-run/react";

export function Nav() {
    return (
        <div className="w-100 bdt-1 bd-c-gray bc-white p-5 pt-2 pb-5">
            <ul className="d-fr jc-sb fc-gray">
                <li className="fc-blue">
                    <Link to="/" className="d-fc ai-c">
                        <span className="material-symbols-outlined fs-xl mb-1">
                            emoji_people
                        </span>
                        <span className="fs-xs">Resume</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="d-fc ai-c">
                        <span className="material-symbols-outlined fs-xl mb-1">
                            web
                        </span>
                        <span className="fs-xs">Web</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="d-fc ai-c">
                        <span className="material-symbols-outlined fs-xl mb-1">
                            apps
                        </span>
                        <span className="fs-xs">App</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="d-fc ai-c">
                        <span className="material-symbols-outlined fs-xl mb-1">
                            architecture
                        </span>
                        <span className="fs-xs">Design</span>
                    </Link>
                </li>
                <li>
                    <Link to="/" className="d-fc ai-c">
                        <span className="material-symbols-outlined fs-xl mb-1">
                            alternate_email
                        </span>
                        <span className="fs-xs">Contact</span>
                    </Link>
                </li>
            </ul>
        </div >
    )
}