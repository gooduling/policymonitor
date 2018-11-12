import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import {Link} from 'react-router-dom'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn,} from 'material-ui/Table';

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
const reports = [
    {
        time: new Date().toLocaleString('ru'),
        goal: 'Купівля інструментів',
        sum: 400,
        comment: 'напр. лінк на скан чеків'
    },
    {
        time: new Date().toLocaleString('ru'),
        goal: 'Купівля дерев',
        sum: 200,
        comment: 'напр. лінк на скан чеків'
    },
    {
        time: new Date().toLocaleString('ru'),
        goal: 'Купівля квітів',
        sum: 810,
        comment: 'напр. лінк на скан чеків'
    }
]
export const EditGamanec = (props) => (
    <div>
        <h2>Редагування кампанії</h2><br/><br/>
        <div>
            <h3>Статус кампанії</h3>
            <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
                <RadioButton
                    value="not_light"
                    label="Активна"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="light"
                    label="Призупинена"
                    style={styles.radioButton}
                />
                <RadioButton
                    value="3_light"
                    label="Зачинена"
                    style={styles.radioButton}
                />
            </RadioButtonGroup>
            <br/><br/>
            <h3>Звіти</h3>
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
                        <TableHeaderColumn>Дата</TableHeaderColumn>
                        <TableHeaderColumn>Сума</TableHeaderColumn>
                        <TableHeaderColumn>Призначення</TableHeaderColumn>
                        <TableHeaderColumn>Додатково</TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {reports.map((p,i) => (
                        <TableRow key={i}>
                            <TableRowColumn>{i+1}</TableRowColumn>
                            <TableRowColumn>{new Date(p.time).toLocaleString("ru")}</TableRowColumn>
                            <TableRowColumn>{p.sum}</TableRowColumn>
                            <TableRowColumn>{p.goal}</TableRowColumn>
                            <TableRowColumn>{p.comment}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <br/><br/>
            <RaisedButton label="Додати звіт про витрати"/><br/><br/><br/>

            <Link to={`/pocket/${props.match.params.id}`}><RaisedButton label="Зберегти" primary={true}/></Link>
        </div>
    </div>
)
export const CreateResult = (props) => (
    <div style={styles.grayblock}>
        <h3>Гаманець збережено</h3>
        <p>ID гаманця: <b>{props.match.params.id}</b></p>
        <Link to={`/pocket/${props.match.params.id}`}><RaisedButton primary label="До сторінки гаманця"/></Link>
        &nbsp;&nbsp;
        <Link to='/list'><RaisedButton label="До списку гаманців"/></Link>
    </div>
)
export const PaymentResult = (props) => (
    <div style={styles.grayblock}>
        <h3>Дякуємо!</h3>
        <p>Ваш платіж на користь гаманця {props.match.params.id} виконано успішно</p>
        <Link to={`/pocket/${props.match.params.id}`}><RaisedButton primary  label="До сторінки гаманця"/></Link>
        &nbsp;&nbsp;
        <Link to='/list'><RaisedButton label="До списку гаманців"/></Link>
    </div>
)
