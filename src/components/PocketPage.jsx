import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';
import {Link} from 'react-router-dom'
import Paper from 'material-ui/Paper';

const styles = {
    block: {
        maxWidth: 250,
    },
    grayblock: {
        padding: 20,
        'background': '#eee'

    },
    toggle: {
        marginBottom: 16,
    },
};

// export class PPocketUI extends Component {
export class PocketPage extends React.Component {
    state = {
        showPayments: false
    }

    render() {
        const {match: {params}, pockets, history} = this.props;
        const pocket = pockets.find(p => p.id.toString() === params.id.toString());
        if (!pocket) {
            history.push('/');
            return null;
        }
        const sum = (arr) => arr.reduce((sum, current) => sum + parseInt(current.sum), 0);
        return (
            <div>
                <div>
                    <Paper zDepth={2} style={{padding: 20, marginBottom: 60}}>
                        <span style={{'color': 'lightgreen', float: 'right'}}>Збір триває</span>
                        <h2>{pocket.name}</h2>
                        <p><i>{pocket.description}</i></p>
                        <p>Статус: Публічний збір / Збір
                            зі звітом</p>
                        <p>Відповідальна особа: {pocket.orgName}</p>
                        <p>Термін закінчення: {pocket.finishDate}</p>
                        <p>Завершити збір при досягненні суми: {pocket.finishSum} грн.</p>
                        <hr/>
                        <h3>Зібрано: {sum(pocket.payments)} грн.</h3>
                        <h4>Звіти надані на суму: {sum(pocket.reports)} грн. (Не
                            відзвітовано: {sum(pocket.payments) - sum(pocket.reports)} грн)</h4>
                        <p style={{fontSize: '0.8em', color: '#444', textAlign: 'right'}}>Власник гаманця? <Link to={'/edit/' + pocket.id}><FlatButton secondary={true}
                                                                                        label="Додати Звіт / Редагувати"/></Link></p>
                    </Paper>
                    <h3>Наявні платежі</h3>
                    <hr/>
                    <Table
                        selectable={false}
                        multiSelectable={false}
                    >
                        <TableHeader
                            displaySelectAll={false}
                            adjustForCheckbox={false}
                            enableSelectAll={false}
                        >
                            <TableRow>
                                <TableHeaderColumn>№</TableHeaderColumn>
                                <TableHeaderColumn>ID платежа</TableHeaderColumn>
                                <TableHeaderColumn>Дата</TableHeaderColumn>
                                <TableHeaderColumn>Від кого</TableHeaderColumn>
                                <TableHeaderColumn>Коментар</TableHeaderColumn>
                                <TableHeaderColumn>Сума</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {pocket.payments.map((p,i) => (
                                <TableRow key={i}>
                                    <TableRowColumn>{i+1}</TableRowColumn>
                                    <TableRowColumn>{p.paymentId}</TableRowColumn>
                                    <TableRowColumn>{new Date(p.time).toLocaleString("ru")}</TableRowColumn>
                                    <TableRowColumn>{p.from}</TableRowColumn>
                                    <TableRowColumn>{p.comment}</TableRowColumn>
                                    <TableRowColumn>{p.sum}</TableRowColumn>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <hr/>
                    <h3>Зібрано: {sum(pocket.payments)} грн.</h3>
                    <br/>
                    <React.Fragment>
                        {pocket.reports.length > 0 && (<FlatButton
                            label="Показати Звіти"
                            secondary={true}
                            onClick={() => this.setState({showPayments: !this.state.showPayments})}
                        />)}
                        {this.state.showPayments && pocket.reports.map(report => <div>{report.amount}</div>)}
                    </React.Fragment>
                    <br/>
                    <Link to={'/payment/'+pocket.id}><RaisedButton label="Зробити внесок" primary/></Link>
                    <br/><br/>

                </div>
            </div>
        )
    }
}