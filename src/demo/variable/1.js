import './App.css';

function App() {
  var x = 0;
  var x1 = 100;
  var x2 = 10.103;
  var x3 = "1044.103";
  var x4 = "Dara";
  var obj1 = {
    id : "1",
    name : "Sok",
    gender : "Male",
  }
  var arr1 = ["Sok","Bona","Bopha","Jon"];
  var arrPerson = [
    {
      id:1,
      name : "Sok",
      gender : "M",
    },
    {
      id:2,
      name : "Bona",
      gender : "M",
    },
    {
      id:3,
      name : "Chanra",
      gender : "M",
    },
  ];

  // function getPrice(){
  //   return 20.3;
  // }

  const getPrice = () => {
    return 20.3;
  }

  // function getTotalPrice(qty,price){
  //   return qty * price;
  // }

  const getTotalPrice = (qty,price) => {
    return qty * price;
  }

  // function getName(name){
  //   return name;
  // }

  const getName = (name) => {
    return name;
  }

  const getElement = (name) => {
    return(
      <h1 style={{backgroundColor:"gray"}}>Your name is : {name}</h1>
    )
  }

  return (
    <div style={{padding:20}}>
      <h1>x = {x+10}</h1>
      <h1>x1 = {x1*10}</h1>
      <h1>x2 = {x2*x1}</h1>
      <h1>x3 = {x3}</h1>
      <h1>x3 = {x4}</h1>
      <h1 style={{color:"red"}}>Display obj1</h1>
        <div>{obj1.id}</div>
        <div>{obj1.name}</div>
        <div>{obj1.gender}</div>
      <h1 style={{color:"red"}}>Demo Array</h1>
      <div>{arr1[0]}</div>
      <div>{arr1[5]}</div>
      <div>{arr1.length}</div>
      <div>{arr1[arr1.length-1]}</div>
      <div>Display array in body</div>
      {
        arr1.map((item,index)=>{
          return (
            <div>
              <div>{index+1}.{item}</div>
            </div>
          )
        })
      }

      <div>Display array Person (array 2D)</div>
      {
        arrPerson.map((item,index)=>{
          return (
            <div style={{padding:20,margin:20,backgroundColor:"#e2e2e2"}}>
              <div>{item.id}</div>
              <div>{item.name}</div>
              <div>{item.gender}</div>
              <div>{item.position}</div>
            </div>
          )
        })
      }
      <h1 style={{color:"red"}}>Demo function</h1>
      <div>{getPrice()+"$"}</div>
      <div>{getPrice() * x2 + x1}</div>
      <div>{getTotalPrice(10,10.5)}</div>
      <div>{getName("Ronaldo")}</div>
      <div>{getName("Messi")}</div>
      <h3>{getName()+""}</h3>
      <div>{getElement()}</div>
      <div>{getElement("Som")}</div>
      <div>{getElement("RUPP")}</div>
    </div>
  );
}

export default App;
