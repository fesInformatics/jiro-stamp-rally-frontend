import { Box, Button, Container, CssBaseline, TextField } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import DefaultTheme from '../DefaultTheme'

const Signin = () => {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <CssBaseline />
      <Container component="main">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="password"
            label="パスワード"
            name="password"
            autoComplete="password"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="confirmedPassword"
            label="パスワード（確認）"
            name="confirmedPassword"
            autoComplete="confirmedPassword"
            autoFocus
          />
          <Button variant="contained">新規登録</Button>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default Signin
