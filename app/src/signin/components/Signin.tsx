import {
  Alert,
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import DefaultTheme from "../../DefaultTheme";
import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";
import { Inputs } from "../type";

type Props = {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
  onSubmit: (data: Inputs) => void;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  getValues: () => Inputs;
};

const Signin = (props: Props) => {
  const { register, onSubmit, errors, handleSubmit } = props;

  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Container component="main">
        {errors.root?.serverError ? (
          <Alert severity="error">{errors.root.serverError.message}</Alert>
        ) : (
          ""
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              margin="normal"
              fullWidth
              id="mailAddress"
              label="メールアドレス"
              autoComplete="mailAddress"
              autoFocus
              error={Boolean(errors.mailAddress)}
              helperText={errors.mailAddress && errors.mailAddress.message}
              {...register("mailAddress", {
                required: "メールアドレスを入力してください。",
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              id="password"
              label="パスワード"
              autoComplete="password"
              autoFocus
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
              {...register("password", {
                required: "パスワードを入力してください。",
              })}
            />
            <TextField
              margin="normal"
              fullWidth
              id="confirmedPassword"
              label="パスワード（確認）"
              autoComplete="confirmedPassword"
              autoFocus
              error={Boolean(errors.confirmedPassword)}
              helperText={
                errors.confirmedPassword && errors.confirmedPassword.message
              }
              {...register("confirmedPassword", {
                required: "パスワード（確認）を入力してください。",
                validate: (v) => {
                  return (
                    v === props.getValues().password ||
                    "パスワードが一致しません。"
                  );
                },
              })}
            />
            <Button
              variant="contained"
              style={{ marginTop: "10%" }}
              type="submit"
            >
              新規登録
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Signin;
