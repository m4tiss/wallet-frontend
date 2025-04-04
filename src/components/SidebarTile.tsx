import { SidebarTileProps } from "../interfaces/SidebarTileProps";
const SidebarTile = ({ title, icon }: SidebarTileProps) => {
  return (
    <div
      className="flex w-full py-3 px-2 rounded-2xl items-center gap-6 hover:bg-black
     hover:text-white transition-all duration-300"
    >
      {icon}
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default SidebarTile;
