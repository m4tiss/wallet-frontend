import logo from "../assets/wallet.png"
const LogoCard = () => {
  return (
    <div className="flex justify-center items-center flex-col gap-0">
        <img src={logo} alt="logo" className="w-16 h-16"/>
        <span className="text-2xl font-semibold">NeoWallet</span>
    </div>
  );
};

export default LogoCard;
