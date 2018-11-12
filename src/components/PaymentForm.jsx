import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import RaisedButton from 'material-ui/RaisedButton';

export class PaymentForm extends React.Component {
    state = {
        pocketId: this.props.match.params.id,
        paymentId: '',
        time: '',
        from: '',
        comment: '',
        sum: 0,
        subscribe: false,
        cardNumber: '',
        email: ''
    }

    onChange = ({target: {name, value}}, isChecked) => {
        console.log(name, value, isChecked)
        this.setState({[name]: value || isChecked})
    }

    pay = () => {
        const pocketId = this.props.match.params.id;
        const paymentId = 10000 + Math.floor(Math.random() * 89999);
        this.props.onPay(pocketId, {...this.state, paymentId, time: new Date()});
        this.props.history.push('/payment_result/' + pocketId)
    }

    render() {
        console.log('pay', this.props)
        return (
            <div>
                <h2>Сплатити на користь кампанії {this.props.match.params.id}</h2>
                <br/><br/><br/><br/>
                <div>
                    <TextField
                        name="cardNumber"
                        value={this.state.cardNumber}
                        floatingLabelText="Номер Картки"
                        onChange={this.onChange}
                    /><br/><br/>
                    <TextField
                        name="sum"
                        type="number"
                        value={this.state.sum}
                        floatingLabelText="Сума"
                        onChange={this.onChange}
                    /><br/><br/>
                    <TextField
                        name="from"
                        value={this.state.from}
                        floatingLabelText="Від кого"
                        onChange={this.onChange}
                    /><br/><br/>
                    <TextField
                        name="comment"
                        value={this.state.comment}
                        floatingLabelText="Коментар"
                        multiLine={true}
                        onChange={this.onChange}
                    /><br/><br/>
                    <Checkbox
                        name="subscribe"
                        label="Подписаться на сообщения о статусе сбора?"
                        checked={this.state.subscribe}
                        onCheck={this.onChange}
                    />
                    {this.state.subscribe &&
                    (<TextField
                        name='email'
                        value={this.state.email}
                        floatingLabelText="Email"
                        onChange={this.onChange}
                    />)}
                    <br/><br/>
                </div>
                <RaisedButton label="Сплатити" primary={true} onClick={this.pay}/>
            </div>
        )

    }
}