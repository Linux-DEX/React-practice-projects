import "./App.css";
import { PopupProvider } from "./Context/PopupContext";
import OverlayPopup from "./Component/Overlaypopup";
import { usePopup } from "./Context/PopupContext";

const MainApp: React.FC = () => {
  const { openPopup } = usePopup();

  return (
    <div>
      <button onClick={openPopup}>Open Popup</button>
      <OverlayPopup />
    </div>
  );
};

const App: React.FC = () => (
  <PopupProvider>
    <MainApp />
  </PopupProvider>
);

export default App;
