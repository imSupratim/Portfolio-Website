function Message({ role, text }) {
  return (
    <div
      className={`my-2 flex items-center gap-2 ${
        role === "user" ? "justify-end" : "justify-start"
      }`}
    >
      {role === "user" ? (
        <span className="w-8 p-1 border-1 rounded-full">
          <img
            src="https://cdn-icons-png.flaticon.com/512/9131/9131478.png"
            alt="user"
          />
        </span>
      ) : (
        <span className="w-8 p-1 border-1 rounded-full">
          <img
            src="https://i.pinimg.com/736x/bc/90/62/bc90629151268d3d08dad6ded6879114.jpg"
            alt="user"
          />
        </span>
      )}
      <div
        className={`max-w-[70%] rounded-xl p-3 ${
          role === "user" ? "bg-blue-500 text-white" : "bg-gray-200 text-black"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;
