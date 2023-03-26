import Input from "../shared/UI/Input/Input";

const BasicForm = (props) => {
  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <Input className="form-control" id="name" type="text" label="Имя" />
          <Input
            className="form-control"
            id="name"
            type="text"
            label="Фамилия"
          />
        </div>
        <div className="form-control">
          <Input
            className="form-control"
            id="name"
            type="text"
            label="Отчество"
          />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
