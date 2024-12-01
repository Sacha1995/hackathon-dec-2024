import Button from "./Button";

const TextModal = ({ title, text, onClose, fontSize }) => {
  return (
    <div className="modal">
      <h1 style={{ fontSize: `${fontSize}px` }}>{title}</h1>
      <p style={{ fontSize: `${fontSize}px` }}>{text}</p>
      <Button text="Close" onClick={onClose} className="btnClose" />
    </div>
  );
};

export default TextModal;
