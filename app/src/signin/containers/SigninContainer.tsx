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
      if (error.response)
        setError("root.serverError", {
          type: error.response.data.statusCode,
          message: error.response.data.message,
        });
      else {
        setError("root.serverError", {
          type: "500",
          message: "サーバーとの通信に失敗しました",
        });
      }
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
