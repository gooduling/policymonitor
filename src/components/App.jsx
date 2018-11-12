import React from 'react';
import {withRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {CreateResult, EditGamanec, PaymentResult} from "./PPayment";
import {Home} from "./Home";
import {PaymentForm, } from "./PaymentForm";
import {PocketsList} from "./PocketsList";
import {CreatePocket} from "./CreatePocket";
import {PocketPage} from "./PocketPage";
import {Route, Switch} from 'react-router-dom'
import Papa from 'papaparse'

Papa.parse("/policy_sample.csv", {
	download: true,
	complete: function(results) {
		console.log(results);
	}
});

const pathMap = {
    '/': ' - Головна сторінка',
    '/policy': ' - Політики',
    '/candidates': ' - Кандидати',
    '/quest': ' - Тестування'
};
export const policy = [
    {
        name: 'Здоровля',
        text: 'text'
    }
]

const AppBarHeader = (props) => {
    return (
        <AppBar
            title={`Публічний Гаманець ${pathMap[props.location.pathname] || ''}`}
            onTitleClick={() => props.history.push('/')}
            titleStyle={{cursor: 'pointer'}}
            showMenuIconButton={false}
        />
    )
};
const Header = withRouter(AppBarHeader);

export class App extends React.Component {
    state = JSON.parse(sessionStorage.getItem('ppocket')) || {
        policy
    };

    createPocket = (pocket) => {
        let newPockets = [...(this.state.pockets || [])];
        newPockets.push(pocket);
        this.setState({pockets: newPockets});
        this.saveInStorage()
    };

    createPayment = (pocketId, payment) => {
        let newPockets = [...this.state.pockets];
        const pocket = newPockets.find(p => p.id == pocketId);
        if (pocket) {
            pocket.payments.push(payment);
            this.setState({pockets: newPockets})
        }
        this.saveInStorage()
    };
    componentDidMount() {

    }

    componentWillUnmount() {
        this.saveInStorage()
    }
    saveInStorage = () => setTimeout(() => sessionStorage.setItem('ppocket', JSON.stringify(this.state)) , 100);

    render() {
        const { policy = [] } = this.state;
        return (
            <MuiThemeProvider>
                <div>
                    <Header/>
                    <div className='page'>
                        <Switch>
                            <Route exact path='/' component={(props)=><Home {...props} pockets={policy}/>}/>
                            <Route path='/policy'
                                   component={(props) => <CreatePocket {...props} onSave={this.createPocket}/>}/>                        
                            <Route path='/quest' component={CreateResult}/>                    
                            <Route path='/candidates' component={(props) => <PocketsList {...{...props, policy}}/>}/>
                        </Switch>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
};