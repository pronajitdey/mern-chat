import Avatar from "./Avatar"

export default function Contact({id, username, onClick, selected, online}) {
  return (
    <div key={id} 
          onClick={() => onClick(id)}
          className={"border-b border-gray-100 flex items-center gap-2 cursor-pointer " + (selected ? "bg-blue-100" : "")}>
      {selected && (
        <div className="w-1 bg-blue-500 h-12 rounded-r-md"></div>
      )}
      <div className="flex py-2 pl-4 items-center gap-2">
        <Avatar online={online} userId={id} username={username} />
        <span className="text-gray-800">{username}</span>
      </div>
    </div>
  )
}