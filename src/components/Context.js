import React, { Component } from 'react'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "I Phone 7",
                "src": "https://images.indianexpress.com/2020/10/iphone11.jpg",
                "description": "best IOS UI/UX designing",
                "content": "I phone 7 best with more features. A11 bionic chip introduced. 4 GB RAm,64 GB variant",
                "price": 330,
                "colors": ["red", "black","White"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Google pixel 3",
                "src": "https://www.androidheadlines.com/wp-content/uploads/2020/10/Google-Pixel-5-Review-AM-AH-8.jpg",
                "description": "Google launched product with best features",
                "content": "Google pixel 3 is a new product introduced by goole. This is 6 GB RAM and 128 GB variant with new sony cameras in front and back",
                "price": 290,
                "colors": ["red", "black","White"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "IPhone 12",
                "src": "https://cdn.pocket-lint.com/r/s/970x/assets/images/154302-phones-review-iphone-12-pro-review-product-shots-image3-wd487ybwpf-jpg.webp",
                "description": "COMING SOON..",
                "content": "Iphone 12 a baand new product with latest A14 Bionic chip and triple cameras with ultra slow motion and night mode. 4abd 6 GB variants soon.",
                "price": 500,
                "colors": ["lightblue", "white", "red", "black"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "OPPO F17 PRO",
                "src": "https://www.91-cdn.com/pricebaba-blogimages/wp-content/uploads/2020/08/OPPO-F17-Pro-Featured.jpg",
                "description": "UI/UX designing, html css tutorials",
                "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
                "price": 150,
                "colors": ["orange", "black", "red","White"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "Mi 10 5G",
                "src": "https://static.toiimg.com/thumb/msid-76339889,width-640,resizemode-4/76339889.jpg",
                "description": "Mi product launched with 5G",
                "content": "droid 10, up to Android 11, MIUI 11 128GB/256GB storage",
                "price": 130,
                "colors": [ "black", "red", "blue","White"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "Vivo V19",
                "src": "https://www.digitalwebreview.com/wp-content/uploads/2020/04/image-2-compressed.jpg",
                "description": "A Vivo product with new Android OS and battery",
                "content": " It is powered by a Snapdragon 712 SoC and has 8GB of RAM· The all-day battery life and speedy 33W fast charging",
                "price": 170,
                "colors": ["orange", "black", "green"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


