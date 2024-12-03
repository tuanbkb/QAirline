export default function RectangleCard({ imageUrl, name, onCardClick }) {
  return (
    <div
      key={name}
      onClick={onCardClick}
      className="relative cursor-pointer rounded-md overflow-hidden group"
    >
      <img
        src={imageUrl}
        className="h-[250px] w-full object-cover rounded-md transition-transform duration-300 ease-in-out group-hover:scale-110"
      />
      <div className="bg-[#ECDCFF]/90 absolute w-[100%] p-5 bottom-0 rounded-b-md flex justify-between items-center">
        <h2 className="font-bold text-white text-xl opacity-100">{name}</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="white"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
