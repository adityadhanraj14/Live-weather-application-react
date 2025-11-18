import { Cloud, Sun } from "lucide-react";

const Today = () => {
    return (
        <div className="today w-full bg-gray-900">
            <div className="header flex justify-content items-center p-4 text-white">
                <div>Friday</div>
                <div className="ml-auto">11:45 AM</div>
            </div>
            <div className="body p-6 flex flex-row gap-4 bg-[#4A70A9] mx-6 rounded-xl">
                <div className="header flex justify-content items-center p-4 text-[16px]">
                   16 degree c
                </div>
                <div className="temp w-40 bg-[#BBD7EC] h-32 grid justify-center items-center rounded-xl">
                    16 degree C
                </div>
                <div className="">
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                </div>
                <div className="">
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                </div>
                <div className="">
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                    <div className="w-40 h-15 bg-[#BBD7EC] rounded-xl grid justify-center items-center m-1">Real feel: 18 c</div>
                </div>
                <div className="temp w-40 bg-[#BBD7EC] h-32 flex justify-center items-center rounded-xl ml-auto">
                    <Cloud size={50} color="blue"/>
                    <Sun size={50} color="yellow" className=""/>
                </div>
            </div>

        </div>
    )
}
export default Today;