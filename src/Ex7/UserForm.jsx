import { useState } from "react";
import { useForm } from "react-hook-form";

const UserForm = () => {
  const [person, setPerson] = useState(null);
  const { register, handleSubmit, reset, formState: {isValid, errors} } = useForm();

  const onSubmit = (data) => {
    setPerson(data);
    reset();
  };

  return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-3">
      <label htmlFor="firstName" className="form-label">
        Prénom
      </label>
      <input
        {...register("firstName", {required: true, minLength: 2})}
        id="firstName"
        type="text"
        className="form-control"
        required
      />
      {errors.firstName?.type === "required" && <p className="text-danger">Le champ Prénom est requis</p>}
      {errors.firstName?.type === "minLength" && <p className="text-danger">Le champ Prénom doit comporter au moins 2 caractères</p>}
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">
        Numéro de téléphone
      </label>
      <input
        {...register("phoneNumber", {required: true, pattern: /^(\d\s?){10}$/})}
        id="phoneNumber"
        type="text"
        className="form-control"
        required
      />
      {errors.phoneNumber?.type === "required" && <p className="text-danger">Le champ Numéro de téléphone est requis</p>}
      {errors.phoneNumber?.type === "pattern" && <p className="text-danger">Le champ Numéro de téléphone doit comporter 10 chiffres (les chiffres peuvent être séparés par un espace)</p>}
    </div>
    <button className="btn btn-primary" type="submit">
      Envoi
    </button>
    {person && <div><div>Données envoyées:</div><div>Prénom: {person.firstName}</div><div>Age: {person.phoneNumber}</div></div>}
  </form>
  );
}

export default UserForm;