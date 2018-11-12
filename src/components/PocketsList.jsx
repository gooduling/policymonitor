import React from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export const PocketsList = ({pockets}) => (
    <div>
        <h3>Список Гаманців</h3>
        <Table>
            <TableHeader
                displaySelectAll={false}
                adjustForCheckbox={false}
                enableSelectAll={false}
            >
                <TableRow>
                    <TableHeaderColumn>№</TableHeaderColumn>
                    <TableHeaderColumn>ID платежа</TableHeaderColumn>
                    <TableHeaderColumn>Дата створення</TableHeaderColumn>
                    <TableHeaderColumn>Власник</TableHeaderColumn>
                    <TableHeaderColumn>Тип</TableHeaderColumn>
                    <TableHeaderColumn></TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
                {pockets.map((p,i) => (
                    <TableRow>
                        <TableRowColumn>{i+1}</TableRowColumn>
                        <TableRowColumn>{p.id}</TableRowColumn>
                        <TableRowColumn>10.09.2017 14:00</TableRowColumn>
                        <TableRowColumn>{p.orgName}</TableRowColumn>
                        <TableRowColumn>Публічний</TableRowColumn>
                        <TableRowColumn>
                            <Link to={`/pocket/${p.id}`}>
                                <RaisedButton label="Переглянути" primary={true}/>
                            </Link>
                        </TableRowColumn>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
        <Link to='/new'><RaisedButton label="Створити Прозорий Гаманець" primary={true}/></Link><br/><br/>
    </div>
)