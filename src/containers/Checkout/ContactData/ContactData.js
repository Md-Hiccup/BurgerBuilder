import React, {Component} from 'react';
import axios from '../../../axios-orders';

import classes from './ContactData.css';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state = {
        name: '',
        email:'',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault(); // to prevent the request for reloading the page
        this.setState({loading: true});
        const order= {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name:'Max',
                address: {
                    street: 'Teststreet 1',
                    zipCode: '415253',
                    country: 'Germany'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };
        axios.post('/orders.json', order)
            .then(res =>{
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(err => {
                this.setState({loading: false});
            });
    };

    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your name" />
                <input type="email" className={classes.Input} name="email" placeholder="Your email" />
                <input type="text" className={classes.Input} name="street" placeholder="Street" />
                <input type="text" className={classes.Input} name="Postal Code" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner/>;
        }
        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;
