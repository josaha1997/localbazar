import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  root: {
      display: 'flex',
      //flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing.unit,
    },
    formControl: {
      margin: theme.spacing.unit * 3,
    },
    group: {
      margin: `${theme.spacing.unit}px 0`,
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    
      
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      flexBasis: 200,
    },
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffc107"
    }
  }
});

const product=[
  {
    id:1,
    name:"Chips"
  },
  {
    id:2,
    name:"Biscuits"
  },
  {
    id:3,
    name:"Cold Drinks"
  },
  {
    id:4,
    name:"Dry Fruits"
  },
  {
    id:5,
    name:"Snacks"
  },
]
function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}
//const age = [20, 13, 23];
class Search extends Component {
      //<Search term={product}/>
     /* <React.Fragment>
        <Search/>
        <Switches />
        <RadioButtonsGroup />
        <ControlledOpenSelect label="Age" value={age} />
        <OutlinedTextFields label="Feedback" />
        <Headings text="product list" />
        <AlertDialog
          text="Successfull"
          value="You have logged successfully"
          type="Error"
        
      </React.Fragment>*/
      constructor(props){
        super(props);
        this.state={
          product:product,
          term:'',
        }
          this.searchHandler=this.searchHandler.bind(this);
        }
        searchHandler(event){
        this.setState({term: event.target.value})
        }
render() {
  const{term,product}=this.state;
return (
  
  <div className="App" align="center">
  <MuiThemeProvider theme={theme}>
    <form>
      <TextField type="text"
      margin="normal"
      variant="outlined"
      onChange={this.searchHandler}
      value={term}
      />
    
    </form>
    </MuiThemeProvider>
    {
      product.filter(searchingFor(term)).map(item=>
       <div key={item.id}>
       <h3>{item.name}</h3>
       </div>
       
       )
    }
    </div>
   
);
}
}

export default Search;
