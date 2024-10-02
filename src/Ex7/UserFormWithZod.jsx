import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Le prénom doit avoir au moins 2 caractères" }),
  phoneNumber: z
    .string()
    .refine(val => /^(\d\s?){10}$/.test(val ?? ""), "Le champ Numéro de téléphone doit comporter 10 chiffres (les chiffres peuvent être séparés par un espace)")
});

const UserFormWithZod = () => {
  const [person, setPerson] = useState(null);
  const { register, handleSubmit, reset, formState: {errors} } = useForm({ resolver: zodResolver(schema) });

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
        {...register("firstName")}
        id="firstName"
        type="text"
        className="form-control"
        required
      />
      {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
    </div>
    <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">
        Numéro de téléphone
      </label>
      <input
        {...register("phoneNumber")}
        id="phoneNumber"
        type="text"
        className="form-control"
        required
      />
      {errors.phoneNumber && <p className="text-danger">{errors.phoneNumber.message}</p>}
    </div>
    <button className="btn btn-primary" type="submit">
      Envoi
    </button>
    {person && <div><div>Données envoyées:</div><div>Prénom: {person.firstName}</div><div>Age: {person.phoneNumber}</div></div>}
  </form>
  );
}

export default UserFormWithZod;