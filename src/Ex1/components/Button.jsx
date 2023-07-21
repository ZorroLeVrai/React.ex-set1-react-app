export default function Button({
  children,
  style = "primary",
  onClickHandler,
}) {
  const classNameContent = `btn btn-${style.toLowerCase()}`;
  return (
    <button className={classNameContent} onClick={onClickHandler}>
      {children}
    </button>
  );
}
