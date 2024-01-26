import Signin from "../components/Signin";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Inputs } from "../type";

const createUser = async (data: Inputs) => {
  const { mailAddress, password } = data;

  const myAxios = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    headers: { "Content-Type": "application/json" },
  });

  await myAxios
    .post("/user/register", {
      mailAddress: mailAddress,
      password: password,
    })
    .then(() => {})
    .catch((error) => {
      throw error;
    });
};

const SigninContainer = () => {
  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      await createUser(data);
      // TODO: ホーム画面に遷移する
    } catch (error: any) {
      setError("root.serverError", {
        type: error.response.data.statusCode,
        message: error.response.data.message,
      });
    }
  };

  return (
    <Signin
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      handleSubmit={handleSubmit}
      getValues={getValues}
    />
  );
};

export default SigninContainer;
