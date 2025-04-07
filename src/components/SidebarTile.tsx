import { SidebarTileProps } from "../interfaces/SidebarTileProps";
const SidebarTile = ({ title, icon, isClicked }: SidebarTileProps) => {
  return (
    <div
      className={`flex w-full py-3 px-2 rounded-2xl items-center gap-6 
      hover:bg-black hover:text-white transition-all duration-300
      ${isClicked ? "bg-black text-white" : "text-black"}`}
    >
      {icon}
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default SidebarTile;
