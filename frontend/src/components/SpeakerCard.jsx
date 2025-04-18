export const SpeakerCard = ({ name, title, company, image }) => {
    return (
      <div className=" text-white rounded-lg shadow-lg p-4 flex flex-col items-center">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full border-4 border-purple-600 mb-4"
        />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{title}</p>
        <p className="text-sm text-gray-400">{company}</p>
      </div>
    );
  };