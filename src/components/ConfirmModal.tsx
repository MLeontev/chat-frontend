interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message: string;
}

export default function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  message,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className='modal'>
      <div className='modal-content'>
        <p>{message}</p>
        <div className='modal-buttons'>
          <button className='btn btn-danger' onClick={onConfirm}>
            Да
          </button>
          <button className='btn btn-secondary' onClick={onClose}>
            Отмена
          </button>
        </div>
      </div>
    </div>
  );
}
