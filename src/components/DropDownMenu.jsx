import React from "react";

function DropDownMenu(props) {
    if (props.type === 'info')
    return (
        <div className="absolute rounded-lg shadow-md bg-white w-screen ">
            <div className="flex justify-center gap-20">
                <div className="flex flex-col">
                    <h2 className='font-bold'>Baggage info</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Plane</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Travel document</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Airport & Network</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
            </div>
        </div>
    )
    else if (props.type === "explore") return (
        <div className="absolute rounded-lg shadow-md bg-white w-screen ">
            <div className="flex justify-center gap-20">
                <div className="flex flex-col">
                    <h2 className='font-bold'>Destination</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Flight</h2>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                    <a className='p-2 hover:underline' href="">Info</a>
                </div>
            </div>
        </div>
    )
    else return (
        <div className="absolute rounded-lg shadow-md bg-white w-screen ">
            <div className="flex justify-center gap-20">
                <div className="flex flex-col">
                    <h2 className='font-bold'>News</h2>
                    <a className='p-2 hover:underline' href="">News</a>
                    <a className='p-2 hover:underline' href="">News</a>
                    <a className='p-2 hover:underline' href="">News</a>
                    <a className='p-2 hover:underline' href="">News</a>
                    <a className='p-2 hover:underline' href="">News</a>
                </div>
                <div className="flex flex-col">
                    <h2 className='font-bold'>Offers</h2>
                    <a className='p-2 hover:underline' href="">Offer</a>
                    <a className='p-2 hover:underline' href="">Offer</a>
                    <a className='p-2 hover:underline' href="">Offer</a>
                    <a className='p-2 hover:underline' href="">Offer</a>
                    <a className='p-2 hover:underline' href="">Offer</a>
                </div>
            </div>
        </div>
    );
}

export default DropDownMenu;
