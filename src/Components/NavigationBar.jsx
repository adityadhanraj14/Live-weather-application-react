import Toggle from "../CommonComponents/Toggle"

const NavigationBar= ()=>{
    return (
        <div className="flex w-12px p-4 bg-gray-900 text-white">
            <div className="leftNav flex gap-3 ml-4">
                <button>Today</button>
                <button>Tommorow</button>
                <button>Next 7 Days</button>
            </div>
            <div className="rightToggle ml-auto">
                <Toggle/>
            </div>
        </div>
    )
}
export default NavigationBar;