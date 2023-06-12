function Button(props) {
  return (
    <a
      href={props.href}
      className={props.class}
      type={props.type}
      target={props.target}
      download={props.download}
    >
      <i class={props.icon}></i>
      {props.content}
    </a>
  );
}

export default Button;
