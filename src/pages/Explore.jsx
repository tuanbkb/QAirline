import CountryCard from "../components/CountryCard";

function Explore() {
    return (
        <div className="max-w-6xl m-auto">
            <h1 className="w-full text-center font-bold text-3xl text-theme-primary">
                EXPLORE
            </h1>
            <p className="w-full text-center p-4 text-xl">
                Get infomations on some famous attractions of Vietnam and the
                world
            </p>
            <div className="grid grid-cols-3 mt-10">
                <CountryCard name="Vietnam" className="col-span-2"/>
                <CountryCard name="Brazil" className="col-span-1"/>
                <CountryCard name="USA" className="col-span-1"/>
                <CountryCard name="France" className="col-span-1"/>
            </div>
        </div>
    );
}

export default Explore;
