import Button from "./Button";

const TextModal = ({ text, onClose, fontSize }) => {
  return (
    <div className="modal">
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
      <Button text="Close" onClick={onClose} className="btnClose" />
    </div>
  );
};

export default TextModal;
