function FillDetailsTextField({ label, value, placeholder, onChange, disabled = false }) {
    return (
        <div className="relative">
            <input
                className="p-2 border-2 rounded-lg block w-full"
                type="text"
                value={value}
                disabled={disabled}
                onChange={onChange}
                placeholder={placeholder}
            />
            <label className="absolute left-2 -top-3 bg-white px-1 pt-1 text-xs">{label}</label>
        </div>
    );
}

export default FillDetailsTextField;