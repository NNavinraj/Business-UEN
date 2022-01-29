import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from '@mui/material/Button';
import { Input, TextField } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

//Error Messages
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import AlertTitle from '@mui/material/AlertTitle';

//Form Card
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//NavBar
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const validBusinessARCA = new RegExp( // VALIDATION CHECK: nnnnnnnnX (8 Numbers 1 Alphabet)
  '^[0-9]{8}[A-Za-z]{1}$'
);

export const validBusinessLocal = new RegExp( // VALIDATION CHECK: yyyynnnnnX ( year(yyyy) number(nnnnn) 1 Alphabet)
  '^(18|19|20)[0-9]{2}[0-9]{5}[A-Za-z]{1}$'
);

export const validnewUENYear = new RegExp( // VALIDATION CHECK: Tyy(snn,Rnn,Tnn) )
    '^(R[0-9]{2}|S[0-9]{2}|T[0-1]{1}[0-9]{1}|T2[0-2]{1})$' 
);

export const validnewUENNum = new RegExp( // VALIDATION CHECK: nnnnX (4 Numbers 1 Alphabet) )
  '^[0-9]{4}[A-Za-z]{1}$'
);

export const validnewUENType = ["LP", "LL", "FC", "PF", "RF" , "MQ", "MM", "NB" ,"CC", "CS", "MB",  // VALIDATION CHECK: Array used for last 2 digit of a given serial )
"FM", "GS", "DP", "CP", "NR", "CM","CD", "MD", "HS", "VH", "CH", "MH" , "CL", "XL", "CX", "HC",
"RP", "TU", "TC", "FB", "FN", "PA", "PB", "SS", "MC", "SM", "GA", "GB"]; 


const bull = (  // CSS For Card Surrounding The Form
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { // Instantiate State Values For Error Messages
      businessType: 'A',
      BusinessUED: "",
      BusinessARCA:false,
      LocalARCA:false,
      EntitiesUEN:false,
      successComplete:false
    };

    this.handleChange = this.handleChange.bind(this); // Form Bind Values
    this.handleSubmit = this.handleSubmit.bind(this); // Form Bind Values



  }

  handleChange(event) { //Contains Values From Form

    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  }






  handleSubmit(event) { 
    if(this.state.businessType == "A"){ //Validation Check if Dropdown value is "Businesses registered with ACRA"
      if(!validBusinessARCA.test(this.state.BusinessUED) ){ //Validation Check if input value matches nnnnnnnnX (8 Numbers 1 Alphabet) format
         this.setState({
          LocalARCA:false, //Hide Error Message
          BusinessARCA:true, //Show Success Message
          EntitiesUEN:false, //Hide Error Message
          successComplete: false //Hide Success Message
        })
       
      }

      else{

        this.setState({
          EntitiesUEN:false, //Hide Error Message
          LocalARCA:false, //Hide Error Message
          BusinessARCA:false, //Hide Error Message
          successComplete:true //Show Success Message
  
        })
  
      }

    }

    else if(this.state.businessType == "B"){ //Validation Check if Dropdown value is "Local companies registered with ACRA"
      var getYear = this.state.BusinessUED.substring(0, 4); //Substring to get the first 4 Digits which is yyyy
      var getYearInt = parseInt(getYear); //Convert String to Integer
      if(!validBusinessLocal.test(this.state.BusinessUED) || getYearInt > 2022  ){ //Validation Check if input value matches nnnnnX ( number(nnnnn) 1 Alphabet) format and check if the year is not after 2022
        this.setState({
          BusinessARCA:false, //Hide Error Message
          LocalARCA:true, //Show Error Message
          EntitiesUEN:false, //Hide Error Message
          successComplete:false //Hide Success Message
        })
      }

      else{

        this.setState({
          EntitiesUEN:false, //Hide Error Message
          LocalARCA:false, //Hide Error Message
          BusinessARCA:false, //Hide Error Message
          successComplete:true //Show Success Message
  
        })
  
      }

    }

    else if(this.state.businessType == "C"){ //Validation Check if Dropdown value is "All other entities which will be issued new UEN"
      let getYear = this.state.BusinessUED.substring(0, 3); //Substring to get the first 3 Character which is Tyy
      let getType = this.state.BusinessUED.substring(3, 5); //Substring to get the first 2 Character which is PQ
      let getDate = this.state.BusinessUED.substring(5); //Substring to get the first 4 Character which is nnnnX

      if(!validnewUENYear.test(getYear) || parseInt(validnewUENType.indexOf(getType)) == -1 || !validnewUENNum.test(getDate) ){ //Validation Check if input value matches Tyy(snn,Rnn,Tnn) ) nnnnX (4 Numbers 1 Alphabet) Format
        this.setState({
          EntitiesUEN:true, //Show Error Message
          BusinessARCA:false, //Hide Error Message
          LocalARCA:false, //Hide Error Message
          successComplete:false //Hide Success Message
        })
     }

     else{

      this.setState({
        EntitiesUEN:false, //Hide Error Message
        LocalARCA:false, //Hide Error Message
        BusinessARCA:false, //Hide Error Message
        successComplete:true //Show Success Message

      })

    }
          


    }


    

    event.preventDefault();
  }

  

  render() {
    return (
      <div style={{ 
        backgroundImage:  "url('https://images.pexels.com/photos/879356/pexels-photo-879356.jpeg?cs=srgb&dl=pexels-david-besh-879356.jpg&fm=jpg')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minWidth:"100%",
        maxWidth:"100%"
      }}>
            <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Business UEN
                </Typography>
  
              </Toolbar>
            </AppBar>
          </Box>
  
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          <Card sx={{ minWidth: 275 }}>
                <CardContent>

                <form onSubmit={this.handleSubmit}>
            <h1 data-testid="unitTest1" style={{textAlign:"center"}}>Business UEN</h1>
            <TextField data-testid="unitTest2" placeholder='Business UEN' id="outlined-basic" name="BusinessUED" value={this.state.BusinessUED} onChange={this.handleChange} label=" Business UEN" variant="outlined" />



                <br></br>
                <br></br>
      
        <FormControl variant="filled" sx={{  minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">Business Type</InputLabel>
          <Select data-testid="unitTest3" labelId="demo-simple-select-filled-label" name="businessType" value={this.state.businessType} onChange={this.handleChange}>
            <MenuItem value="A">Businesses registered with ACRA</MenuItem>
            <MenuItem value="B">Local companies registered with ACRA</MenuItem>
            <MenuItem value="C">All other entities which will be issued new UEN</MenuItem>
          </Select>
        </FormControl>
    {/* <label>
      Business Type: 
      <select name="businessType" value={this.state.businessType} onChange={this.handleChange}>
        <option value="A">Businesses registered with ACRA</option>
        <option value="B">Local companies registered with ACRA</option>
        <option value="C">All other entities which will be issued new UEN</option>
      </select>
    </label> */}

    <br></br>
    <br></br>

    <div style={{textAlign:"center"}}>
    <Button variant="outlined"type="submit" value="Submit" >Submit</Button>

    </div>

  </form>
                </CardContent>
                <CardActions>
                <div >
                {this.state.BusinessARCA ?  <Alert  severity="error">Invalid Format! Please enter input as the format "nnnnnnnnX". E.G 12345678X </Alert> : ''}
                {this.state.LocalARCA ?  <Alert severity="error">Invalid Format! Please enter input as the format "yyyynnnnnX". E.G 201254321X </Alert> : ''}
                {this.state.EntitiesUEN ?  <Alert severity="error">Invalid Format! Please enter input as the format "TyyPQnnnnX". E.G T01LP1234X </Alert> : ''}
                {this.state.successComplete ?  <Alert severity="success"> <AlertTitle>Your Business UEN is Correct!</AlertTitle></Alert> : ''}
                </div>
                </CardActions>
              </Card>

      </div>


      </div>
    );
  }
}

export default App;
