const Input = (props) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input {...props.input} value={props.value} onChange={props.onChange}/>
    </div> 
  );
};

export default Input;
