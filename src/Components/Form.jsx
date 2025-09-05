import React, { useState } from "react";
import {
  Stack,
  Typography,
  Box,
  CardContent,
  TextField,
  Button,
  Snackbar,
  Alert
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";


export default function SignUp() {
  const [message, setMessage] = useState(false);
  const [open, setOpen] = React.useState(false);

  

  const handleClick = () => {
    
    if(message){
      setOpen(true);
    }
    
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useEffect(() => {
    if (message) {
      setOpen(true);
    }
  }, [message]); 
  

  const formik = useFormik({
    initialValues: {
      fullName: "",
      userName: "",
      email: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
      address: "",
    },
    onSubmit: async (values) => {
      
      setMessage(true);
      
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("*Required"),
      userName: Yup.string().required("*Required"),
      email: Yup.string().email("Invalid Email").required("*Required"),
      contactNo: Yup.string()
        .matches(/^[0-9]{10}$/, "Enter a valid 10 digit number")
        .required("*Required"),
      
    }),
  });

  return (
    <div>
      <Stack direction={'column'} spacing={15}>
      <Stack direction={"column"} spacing={5} sx={{ margin: "20px" }}>
        <Typography
          variant="h2"
          align="center"
          fontWeight={500}
          color="secondary"
        >
          REGISTER
        </Typography>
        <div>
          <Box className="Form-container">
            <CardContent className="form">
              <form onSubmit={formik.handleSubmit}>
                <Stack direction={"column"} spacing={4}>
                  <TextField
                    variant="outlined"
                    label="Full Name"
                    color="secondary"
                    name="fullName"
                    {...formik.getFieldProps("fullName")}
                  />
                  {formik.touched.fullName && formik.errors.fullName ? (
                    <Typography variant="body2" sx={{ color: "red" }}>
                      {formik.errors.fullName}
                    </Typography>
                  ) : null}
                  <TextField
                    variant="outlined"
                    label="Email"
                    color="secondary"
                    type="email"
                    name="email"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <Typography variant="body2" sx={{ color: "red" }}>
                      {formik.errors.email}
                    </Typography>
                  ) : null}
                  <TextField
                    variant="outlined"
                    label="User Name"
                    color="secondary"
                    name="userName"
                    {...formik.getFieldProps("userName")}
                  />
                  {formik.touched.userName && formik.errors.userName ? (
                    <Typography variant="body2" sx={{ color: "red" }}>
                      {formik.errors.userName}
                    </Typography>
                  ) : null}
                  
                  
                  
                
                  <TextField
                    variant="outlined"
                    label="Contact No"
                    color="secondary"
                    name="contactNo"
                    {...formik.getFieldProps("contactNo")}
                  />
                  {formik.touched.contactNo && formik.errors.contactNo ? (
                    <Typography variant="body2" sx={{ color: "red" }}>
                      {formik.errors.contactNo}
                    </Typography>
                  ) : null}

                  <Button
                    variant="contained"
                    color="secondary"
                    type="submit"
                    onClick={handleClick}
                  >
                    Register
                  </Button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      variant="filled"
                      sx={{ width: "100%" }}
                    >
                      Your Registraton is Successful!
                    </Alert>
                  </Snackbar>

                  
                </Stack>
              </form>
            </CardContent>
          </Box>
        </div>
      </Stack>
      </Stack>
    </div>
  );
}
