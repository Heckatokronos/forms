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
        <Input
          className="form-control"
          id="e-mail"
          type="e-mail"
          label="E-mail адрес"
        />
      </div>
      <div className="form-actions">
        <button>Отправить</button>
      </div>
    </form>
  );
};

export default BasicForm;
