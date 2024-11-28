import "../App-t.css"
import pfp from "../assets/react.svg"

function Header() {
    return (
        <>
            <div className="flex justify-between">
                <h1 className="px-12 py-8 text-5xl flex">JobHunter</h1>
                <img src={pfp} className="px-4 py-4 my-6 mx-12 hover:bg-slate-500 rounded-full"/>
            </div>

            <hr />
        </>
    )
}

export default Header