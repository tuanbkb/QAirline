function Checkbox({checked, onChange}) {
    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="hidden peer"
            ></input>
            <label
                htmlFor="custom-checkbox"
                className="w-5 h-5 flex items-center justify-center rounded-md border-2 border-gray-300 bg-gray-100 peer-checked:bg-purple-600 peer-checked:border-purple-600"
            >
                {/* Tick Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="white"
                    className={`w-4 h-4 ${
                        checked ? "opacity-100" : "opacity-0"
                    }`}
                >
                    <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0z"
                        clipRule="evenodd"
                    />
                </svg>
            </label>
        </>
    );
}

export default Checkbox;
