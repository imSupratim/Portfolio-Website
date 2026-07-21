// import { MessageCircle } from "lucide-react";

// function ChatButton({ onClick }) {
//   return (
//     <div className="flex">
//     <button
//       onClick={onClick}
//       className="
//         fixed
//         bottom-6
//         right-6
//         rounded-full
//         bg-purple-600
//         text-white
//         shadow-xl
//         hover:scale-110
//         transition
//         duration-300
//         flex
//         items-center
//         justify-center
//         z-50
//       "
//     >
//       <img className="rounded-full h-16" src="https://i.pinimg.com/736x/bc/90/62/bc90629151268d3d08dad6ded6879114.jpg" alt="Leo" />
//     </button>

//     </div>
//   );
// }

// export default ChatButton;

function ChatButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        fixed
        h-15
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-3
        rounded-full
        bg-white
        hover:bg-purple-800
         text-gray-800
         hover:text-amber-50
        px-2
        py-2
        shadow-2xl
        hover:scale-105
        transition-all
        duration-300
      "
    >
      <div className="flex flex-col text-left">
        <span className="text-sm font-semibold ">Chat with Leo</span>
      </div>

      <img
        src="https://i.pinimg.com/736x/bc/90/62/bc90629151268d3d08dad6ded6879114.jpg"
        alt="Leo"
        className="h-14 w-14 rounded-full border-2 border-purple-500"
      />
    </button>
  );
}

export default ChatButton;
