import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, Paper, TextField } from "@mui/material";


export default function FirstPage() {
  
  const [formValues, setFormValues] = useState({
    Id: "",
    name: "",
    ApellidoP: "",
    ApellidoM: "",
    Fecha: "",
  });
  const [fecha, setFecha] = useState("");
  const [phrase, setPhrase] = useState("jj@dud324khsa123h12");
  const [userList,setUserList]=useState(JSON.parse(localStorage.getItem("userList"))?JSON.parse(localStorage.getItem("userList")):[])

  useEffect(() => {
    console.log(userList);
      localStorage.setItem("userList",JSON.stringify(userList))
  }, [userList])
  

  const handleInputChange = (e) => {
    
    const {name, value} = e.target;
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: value,
    }));
    
  };

  function dateIsValid() {
    const regex = /^\d{2}\/\d{2}\/\d{4}$/;
    
    if (fecha.match(regex) === null) {
      return alert("Ingresa un Formato Correcto");
    }

    const [day, month, year] = fecha.split("/");

    const isoFormattedStr = `${year}-${month}-${day}`;

    const date = new Date(isoFormattedStr);

    const timestamp = date.getTime();

    if (typeof timestamp !== "number" || Number.isNaN(timestamp)) {
      return alert("Fecha Incorrecta");
    }

    return alert("Formato Correcto");
  }

  const handleDateChange = (event) => {
    setFecha(event.target.value);
  };

  const handlePhraseChange = (event) => {
    setPhrase(event.target.value);
  };

  function hasInt() {
    let letter = phrase.split("");

    let count = 0;
    letter.forEach((element) => {
      if (!isNaN(element)) {
        count++;
      }
    });
    alert(count);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setUserList(state=>{
      state=[...state,formValues]
      return state
    })
    
  };

  const shortLastName=()=>{
    setUserList((state)=>{
      state.sort((a,b)=>a.ApellidoP>b.ApellidoP?1:-1)
      return state
    })
    
   } 

  return (
    <Box sx={{ p: 2, backgroundColor: "rgb(245,245,250 )", height: "100vh" }}>
      <Box>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h5" component="div">
            ¿Qué es la programación orientada a objetos? En qué casos
            utilizarla?
          </Typography>
          <Typography component="div">
            R:Es una manera de escribir el codigo de una manera mas ordenada y
            limpia y sin que tengamos que repetir muchismo codigo
          </Typography>
          <Typography component="div">
            Lo utilizamos en casos cuando tenemosun proyecto muy complicado o
            largo y queremos escribirlo de manera mas rapida
          </Typography>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ p: 2, my: 2 }}>
          <Typography variant="h5" component="div">
            Si realizamos un sistema de inventarios para un supermercado desde
            0, cuáles serían tus preguntas hacia el cliente?
          </Typography>
          <Typography component="div">
            ¿Desea tener un sistema login?
          </Typography>
          <Typography component="div">
            ¿Cuantas personas lo utilizarian
          </Typography>
          <Typography component="div">
            ¿Que deseea poder hacer en el inventario?
          </Typography>
        </Paper>
      </Box>

      <Box>
        <Typography variant="h5" component="div" fontWeight={600}>
          Realiza un programa, que valida si es una fecha válida y formato.
          Formato esperado dd/MM/yyyy
        </Typography>
        <Paper sx={{ p: 2 }}>
          <TextField
            id="outlined-basic"
            label="Fecha"
            variant="outlined"
            size="small"
            onChange={handleDateChange}
          />
          <Button variant="contained" sx={{ ml: 1 }} onClick={dateIsValid}>
            Check
          </Button>
        </Paper>
      </Box>
      <Box>
        <Paper sx={{ p: 2, mt: 2 }}>
          <TextField
            id="outlined-basic"
            label="Frase"
            variant="outlined"
            size="small"
            value={phrase}
            defaultValue={"jj@dud324khsa123h12"}
            onChange={handlePhraseChange}
          />
          <Button variant="contained" sx={{ ml: 1 }} onClick={hasInt}>
            Check
          </Button>
        </Paper>
      </Box>

      <Box>
        <Paper sx={{ p: 2, mt: 2 }}>
          <Typography>Registro de usuario</Typography>

          <Box sx={{ mt: 2 }}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="Id"
                name="Id"
                label="ID"
                size="small"
                sx={{ width: "200px", mb: 2 }}
                required
                type="number"
                value={formValues.Id}
                onChange={handleInputChange}
              />{" "}
              <br />
              <TextField
                id="name"
                label="Nombre"
                name="name"
                size="small"
                sx={{ width: "200px", mb: 2 }}
                required
                value={formValues.name}
                onChange={handleInputChange}
              />{" "}
              <br />
              <TextField
                id="Apellidop"
                label="Apellido Paterno"
                name="ApellidoP"
                size="small"
                sx={{ width: "200px", mb: 2 }}
                required
                value={formValues.ApellidoP}
                onChange={handleInputChange}
              />{" "}
              <br />
              <TextField
                id="ApellidoM"
                name="ApellidoM"
                label="Apellido Materno"
                size="small"
                sx={{ width: "200px", mb: 2 }}
                required
                value={formValues.ApellidoM}
                onChange={handleInputChange}
              />{" "}
              <br />
              <TextField
                id="Fecha"
                name="Fecha"
                size="small"
                sx={{ width: "200px", mb: 2 }}
                required
                type="date"
                value={formValues.Fecha}
                onChange={handleInputChange}
              />{" "}
              <br />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </Box>
        </Paper>
       
      </Box>
       <Box> 
        <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="h4" component="div"> Usuarios Registrados</Typography>
         <Box sx={{mt:3}}>
         <Button variant="contained" color="primary" sx={{mb:2}} onClick={shortLastName}>Ordenar Por Apellido</Button> 
         
        {userList.map((user)=>{
          return <Typography>{user.name} {user.ApellidoP}  {user.ApellidoM}</Typography>
        })}
        </Box>
        </Paper>
       </Box>
       
    </Box>
  );
}
