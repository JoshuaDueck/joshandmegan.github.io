'use strict';
Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}

const e = React.createElement;
class CheckoutSystem extends React.Component {
    
    constructor(props){
        super(props);
        const searchParams = new URLSearchParams(window.location.search);
        var i = 0;
        var newOrders = [];
        while (decodeURIComponent(searchParams.get(i)) !="null") 
       {
            var name = decodeURIComponent(searchParams.get(i))
            var obj = JSON.parse(name);
            var orderobj = obj.props;
            newOrders = newOrders.concat(<OrderItem orderRestaurantName = {orderobj.orderRestaurantName} orderItemName = {orderobj.orderItemName} orderItemCost = {orderobj.orderItemCost} orderItemNotes={orderobj.orderItemNotes}/>);

            i= i +1;
       }
       this.state={
        orders: newOrders,
        myAddress: "123 Proto St, City, MB, XYZ 3ME",
        myTime: "As soon as possible",
        myPaymentType: null,
        myInstructions: null
       };
  
    }
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
    }
    addOrderlistFromURL(){
        const searchParams = new URLSearchParams(window.location.search);
        var i = 0;
        var newOrders = [];
        while (decodeURIComponent(searchParams.get(i)) !="null") 
       {
            var name = decodeURIComponent(searchParams.get(i))
            var obj = JSON.parse(name);
            var orderobj = obj.props;
            newOrders = newOrders.concat(<OrderItem orderRestaurantName = {orderobj.orderRestaurantName} orderItemName = {orderobj.orderItemName} orderItemCost = {orderobj.orderItemCost} orderItemNotes={orderobj.orderItemNotes}/>);

            i= i +1;
       }
       const combinedOrders = this.state.orders.concat(newOrders);
       this.setState({orders: combinedOrders});
    }
    //code from https://gist.github.com/tjmehta/9204891
     objectToQuerystring (obj) {
        return Object.keys(obj).filter((key) => obj[key] != undefined && obj[key] != '').reduce((str, key, i) => {
          var delimiter: string, val;
          delimiter = (i === 0) ? '?' : '&';
          if(Array.isArray(obj[key])) {
            key = encodeURIComponent(key);
            var arrayVar = obj[key].reduce((str, item) => {
              val = encodeURIComponent(JSON.stringify(item));
              return [str, key, '=', val, '&'].join(''); 
            }, '');
            return [str, delimiter, arrayVar.trimRightString('&')].join('');
          } else {
            key = encodeURIComponent(key);
            val = encodeURIComponent(JSON.stringify(obj[key]));
            return [str, delimiter, key, '=', val].join('');      
          }
        }, '');
    }
    render(){
        return (
        <div class="container">
            <div class="row">
                <div class="col-lg">
                    <ImageTray />
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <MyInfoColumn infoMyAddress = {this.state.myAddress} infoMyTime = {this.state.myTime} infoMyPaymentType = {this.state.myPaymentType} infoMyInstructions = {this.state.myInstructions}/>
                </div>
                <div class="col-md-4" >
                    <OrderColumn orders = {this.state.orders} />
                </div>
            </div>
        </div>
        );
    }
}

class ImageTray extends React.Component {
    render(){
        return (
        <div class="row">
            <div id="image-tray" class="col-lg">
                IMAGES GO HERE
            </div>
        </div>
        );
    }
}


class MyInfoColumn extends React.Component {
    handleChange(event){
        this.setState({[event.target.name]: event.target.value});
        alert("Hello");
    }
    render(){
        const infoMyAddress = this.props.infoMyAddress;
        const infoMyTime = this.props.infoMyTime;
        const infoMyPaymentType= this.props.infoMyPaymentType;
        const infoMyInstructions= this.props.infoMyInstructions;
        
        return (
        <div>
            <div class="row">
                <h2>My Info</h2>

            </div>
            <div class="row">
                    <div class="col-md-3 text-right">
                        <strong>Delivery Adress:</strong>
                    </div>  
                    <div class="col-md-5 text-left">
                        {infoMyAddress}&nbsp;
                        <button class="btn btn-danger btn-sm">Edit</button>
                    </div>
                    <div class="col-md-4 text-left">
                    </div>    
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-md-3 text-right">
                        <strong>Desired Time:</strong>
                </div>  
                <div class="col-md-9 text-left">
                    <select name="infoMyTime" class="form-control-xs"  onChange={this.handleChange}>
                            <option value="As soon as possible">As soon as possible</option>
                            <option value="in 30 minutes">in 30 minutes</option>
                            <option value="in One hour">in One hour</option>
                            <option value="in One hour and 30 minutes">in One hour and 30 minutes</option>
                            <option value="in Two hours">in Two hours</option>
                    </select>   
                </div>   
            </div>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-md-3 text-right">
                        <strong>Payment Type:</strong>
                </div>  
                <div class="col-md-9 text-left">
                    <select name="infoMyTime" class="form-control-xs" onChange={this.handleChange}>
                        <option value="As soon as possible">Visa</option>
                        <option value="in 30 minutes">Debit</option>
                        <option value="in One hour">Mastercard</option>
                        <option value="in One hour and 30 minutes">Paypal</option>
                    </select> 
                </div>   
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div class="row">
                <div class="col-md-9 text-left">
                    <label for="myInstructions">Additional Instructions:</label>
                    <textarea name="myInstructions" class="form-control" id="myInstructions" placeholder="Special instructions for the driver" rows="4"></textarea>
                    <small id="instructionHelp" class="form-text text-muted">* The delivery staff are not responsible for preparing your food</small>
                </div>
            </div>
        </div>
        );
    }
}

class OrderItem extends React.Component {
    render(){
        const orderRestaurantName = this.props.orderRestaurantName;
        const orderItemName = this.props.orderItemName;
        const orderItemCost = this.props.orderItemCost;
        const orderItemNotes = this.props.orderItemNotes;
        return (
        <div class="row">
            <table>
                <tr>
                    <th><strong>{orderRestaurantName}</strong></th>
                </tr>
                <tr>
                    <td class="order-item-name">{orderItemName}</td>
                    <td>{orderItemCost}</td>
                </tr>
                <tr>
                    <ul>
                        {
                        orderItemNotes.map((orderNote) => <li>{orderNote}</li>)
                        }
                    </ul>
                </tr>
            </table>
        </div>
        );
    }
}
class OrderColumn extends React.Component {
    render(){
        return (
            <div>
                <div class="col-md column-header">
                    <h2>Order</h2>
                </div>
                <div class="col-md ordering-column">
                    {this.props.orders}
                </div>

            </div>
        );
    }
}
const domContainer = document.querySelector('#checkout-container');
ReactDOM.render(e(CheckoutSystem), domContainer);
