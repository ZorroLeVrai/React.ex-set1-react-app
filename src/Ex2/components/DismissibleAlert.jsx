export default function DismissibleAlert(props) {
  const { children, onCloseHandler } = props;

  return (
    <div
      className="alert alert-warning alert-dismissible fade show"
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onCloseHandler}
      ></button>
    </div>
  );
}
