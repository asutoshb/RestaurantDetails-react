import React, { useState } from "react";
import "./App.css";
import RestaurantDetails from "./components/RestaurantDetails";
import data from "./components/data.json";

const App = () => {


  const init = {
      filterData: data,
    };

  const [state, setState] = useState(init);

  const filterRating = (event) => {
    
    // eslint-disable-next-line
    let temp = data.filter((ele) => {
      if (Number(ele.reviews) >= Number(event.target.name)) return ele;
    });
    setState({
      filterData: temp,
    });
  };

  const filterPayment = (event) => {
    if (event.target.name === "all") {
      setState({
        filterData: data,
      });
    } else {
      // eslint-disable-next-line
      let temp = data.filter((ele) => {
        if (ele.paymentMethods[event.target.name]) return ele;
      });

      setState({
        filterData: temp,
      });
    }
  };

 const filterPrice = (e) => {
    let temp;

    // let temp = allData.map(ele=>{
      if(e.target.name === 'ascending'){
        temp = data.sort((x,y)=>x['cost_for_two']-y['cost_for_two'])
      }
      else{
        temp = data.sort((x,y)=>y['cost_for_two']-x['cost_for_two'])
      }
    // })

    setState({
      filterData: temp
    })

  }

 
   // console.log(this.state.data);
    return (
      <div>
        <div>
        <div class="navBar">
          <h1>Restaurant Details For You</h1>
          <div class="flexbox">
            <div>
              <div>Filter By Reviews</div>
              <div>
                <button onClick={filterRating} name="0">
                  All
                </button>
                <button onClick={filterRating} name="1">
                  &gt;1
                </button>
                <button onClick={filterRating} name="2">
                  &gt;2
                </button>
                <button onClick={filterRating} name="3">
                  &gt;3
                </button>
                <button onClick={filterRating} name="4">
                  &gt;4
                </button>
              </div>
            </div>

            <div>
              <div>Filter By Payment Methods</div>
              <div>
                <button onClick={filterPayment} name="all">
                  All
                </button>
                <button onClick={filterPayment} name="card">
                  Card
                </button>
                <button onClick={filterPayment} name="cash">
                  Cash
                </button>
                <button onClick={filterPayment} name="upi">
                  UPI
                </button>
              </div>
            </div>
            
            <div>
              <div>Sort By Price for two</div>
              <div>
                <button onClick={filterPrice} name="ascending">
                  Ascending
                </button>
                <button onClick={filterPrice} name="descending">
                  Descending
                </button>
              </div>
            </div>


          </div>
        </div>
        <div className="res">
          <RestaurantDetails data={state.filterData} />
        </div>
        
        </div>
      </div>
    );
  
}


export default App;