import React, { useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import LockOutlinedIcon from "@mui/icons-material/LockOutlined"
import Typography from "@mui/material/Typography"
import { useSelector, useDispatch } from "react-redux"
import { useTranslation } from "react-i18next"
import { loginUser } from "../../app/actions/login-user-actions"
import LoadingSpinner from "../LoadingSpinner"
import { useNavigate } from "react-router-dom"
import "./style.css"

function Copyright(props) {
  const { t } = useTranslation()
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {`${t("copyright")} © `}
      <Link color="inherit" href="https://mui.com/">
        Tasmim - Design Your Items
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function Login() {
  const navigate = useNavigate()
  const loading = useSelector((state) => state.viewSlice.isLoading)
  const errMsg = useSelector((state) => state.userSlice.errMsg)
  const userLoggedIn = useSelector((state) => state.userSlice.userObject)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    dispatch(loginUser(email, password))
    if (userLoggedIn) navigate("/")
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    })
  }

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#353535] via-[#BDBBB0] to-[#8A897C]">
      <Box
        className="box"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "white",
          justifyContent: "space-evenly",
          height: "80vh",
          width: "25vw",
          borderRadius: "25px",
          marginTop: "7vh",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("sign_in_title")}
        </Typography>
        <Box
          className="w-[60%]"
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            required
            fullWidth
            id="email"
            label={t("email")}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("password")}
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("remember_me")}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {t("sign_in_button")}
          </Button>
          <Typography
            sx={{
              display: "flex",
              color: "red",
              fontWeight: "700",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {loading ? <LoadingSpinner /> : errMsg}
          </Typography>

          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("forgot_password")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/sign-up" variant="body2">
                {t("dont_have_account")}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </div>
  )
}
