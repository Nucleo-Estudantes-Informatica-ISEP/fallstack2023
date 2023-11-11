import QRCodeButton from "../QRCodeButton";
import ThemeChanger from "../Theme/ThemeChanger";

const Topbar: React.FC = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-end space-x-5 p-5">
        <ThemeChanger />
        <QRCodeButton />
      </div>
    </nav>
  );
};

export default Topbar;
