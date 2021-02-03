// import logo from './logo.svg';/\
import './App.css';
// import Button from '@material-ui/core/Button';
import { React, useEffect, useState } from 'react'
import axios from 'axios'
import Card from "./card";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Alert, AlertTitle } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '20px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: '200px'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 290,
    color: '#fff',
    '& label.Mui-focused': {
      color: '#fff',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'yellow',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#fff',
      },
      '&:hover fieldset': {
        borderColor: '#fff',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'yellow',
      },
    },
  },
  label: {
    color: '#fff !important'
  }

}));

function App() {
  const classes = useStyles();
  const [error_msg, setErrorMsg] = useState('');
  const [country, setCountry] = useState("India");
  const [data, setData] = useState({});
  const countryArr = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"]
  useEffect(() => {
    getStatistics();
  }, [])

  const getStatistics = () => {
    axios.get('https://corona.lmao.ninja/v2/all?yesterday=false')
      .then(res => {
        const allStat = res;
        setData(allStat.data);
        console.log(res);
      })
  }
  const handleChange = (event) => {
    setCountry(event.target.value);
    axios.get('https://corona.lmao.ninja/v2/countries/' + event.target.value)
      .then(res => {
        setErrorMsg('');
        const allStat = res;
        setData(allStat.data);
        console.log(res);
      }).catch(e => {
        setErrorMsg(e.message)
        setData({})
        console.log(e.data)
      })

  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.

        </p> */}

        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <h1>Covid-19 Tracking Application</h1>
              {data.country ? `Selected country:  ` + country : `World Data`}
            </Grid>
            <Grid item lg={3} md={3} xs={6}>
              <Card className={classes.paper} title="Total Cases" value={data.active} />
            </Grid>
            <Grid item lg={3} md={3} xs={6}>
              <Card className={classes.paper} title="Total Deaths" value={data.deaths} />
            </Grid>
            <Grid item lg={3} md={3} xs={6}>
              <Card className={classes.paper} title="Recovered" value={data.recovered} />
            </Grid>
            <Grid item lg={3} md={3} xs={6}>
              <Card className={classes.paper} title="Tests" value={data.tests} />
            </Grid>
            <Grid item lg={12} md={12}>
              <FormControl className={classes.formControl + ` label`}>
                <InputLabel className={classes.label} id="demo-simple-select-label">Select Country</InputLabel>
                <Select
                  className={classes.label}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={country}
                  onChange={handleChange}
                >
                  {countryArr.map((cnt) => (
                    <MenuItem key={cnt} value={cnt}>{cnt}</MenuItem>
                  )

                  )}
                  {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </div>
        {error_msg ? <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          {error_msg}
        </Alert> : ''
        }
      </header>
    </div>
  );
}

export default App;
