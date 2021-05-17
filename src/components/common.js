const Input = (props) => (
  <div>
    <label>{props.title} : </label>
    <input
      name={props.name}
      type={props.type}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
    />
  </div>
);

const Button = ({ onClick, title, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {title}
  </button>
);

const ErrorMessage = ({ message }) => (
  <div className="errorMessage">{message}</div>
);

export { Input, Button, ErrorMessage };
