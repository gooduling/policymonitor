import React from 'react';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';


const styles = {
    block: {
        maxWidth: 250,
    },
    toggle: {
        marginBottom: 16,
    },
};

const exampleState = {
    name: 'Прибирання двору',
    description: 'Для вивезення мусору нам потрібно зібрати 1500 грн. Просимо кожного мешканця здати по 50грн. В коментаріях до платежу зазначайте будь ласка своє призвище',
    id: 'S33443',
    finishDate: '25/09/2018',
    finishSum: 1500,
    isPublic: true,
    payments: [],
    reports: [],
    login: 'salt',
    password: 'salt',
    orgName: 'Ірина Журба',
    orgContacts: 'example@gmail.com',
    cardNumber: '55665757',
    group: 'Будинок №56',
    isTimeLimited: true,
    isSumLimited: true
}
const emptyState = {
    name: '',
    description: '',
    id: '',
    finishDate: '',
    finishSum: '',
    isPublic: true,
    payments: [],
    reports: [],
    login: 'salt',
    password: 'salt',
    orgName: '',
    orgContacts: '',
    cardNumber: '',
    group: '',
    isTimeLimited: true,
    isSumLimited: true
}

export class CreatePocket extends React.Component {
    state = {...emptyState}

    onChange = ({target: {name, value}}, isChecked) => {
        this.setState({[name]: value || isChecked})
    }

    save = () => {
        const id = 1000 + Math.floor(Math.random() * 8999);
        this.props.onSave({...this.state, id: id.toString()});
        this.props.history.push('/result/' + id)
    }

    render() {
        return (
            <div>
                <div>
                    DEMO:
                    <FlatButton primary label="Заповнити поля прикладом" onClick={() => this.setState(exampleState)}/>
                    <FlatButton primary label="Очистити поля" onClick={() => this.setState(emptyState)}/>
                </div>
                <TextField
                    name='name'
                    value={this.state.name}
                    floatingLabelText="Назва гаманця"
                    onChange={this.onChange}
                /><br/><br/>
                <TextField
                    name="description"
                    value={this.state.description}
                    floatingLabelText="Опис"
                    multiLine={true}
                    onChange={this.onChange}
                /><br/><br/>
                <TextField
                    name="orgName"
                    value={this.state.orgName}
                    floatingLabelText="Дані організаторів"
                    onChange={this.onChange}
                /><br/><br/>
                <div style={styles.block}>
                    <Toggle
                        label="Чи є гаманець публічним"
                        name='isPublic'
                        style={styles.toggle}
                        toggled={this.state.isPublic}
                        onToggle={this.onChange}
                    /><br/>
                    <Toggle
                        name='withReport'
                        label="Можливість додавати звіти"
                        style={styles.toggle}
                        toggled={this.state.withReport}
                        onToggle={this.onChange}
                    /><br/>
                    <Toggle
                        name='isSumLimited'
                        label="Збір з відкритою сумою"
                        style={styles.toggle}
                        toggled={this.state.isSumLimited}
                        onToggle={this.onChange}
                    />
                </div>
                {this.state.isSumLimited && <div>
                    <TextField
                        name="finishSum"
                        value={this.state.finishSum}
                        floatingLabelText="Збір з відкритою сумою"
                        onChange={this.onChange}
                    /><br/></div>}
                <div style={styles.block}>
                    <Toggle
                        name="isTimeLimited"
                        label="Термін кампанії обмежений датою"
                        style={styles.toggle}
                        toggled={this.state.isTimeLimited}
                        onToggle={this.onChange}
                    />
                </div>
                {this.state.isTimeLimited && <div>
                    <TextField
                        name="finishDate"
                        value={this.state.finishDate}
                        floatingLabelText="Кінцева дата збору"
                        disabled
                    />
                    <br/>
                </div>}
                <TextField
                    name="cardNumber"
                    value={this.state.cardNumber}
                    floatingLabelText="Номер карти для отримання"
                    onChange={this.onChange}
                /><br/><br/>
                <TextField
                    name="orgContacts"
                    value={this.state.orgContacts}
                    floatingLabelText="E-mail організатора (логін)"
                    onChange={this.onChange}
                /><br/><br/>
                <TextField
                    name="password"
                    value={this.state.orgContacts}
                    type="password"
                    floatingLabelText="пароль для керування гаманцем"
                /><br/><br/>
                <Checkbox
                    label="Підписатися на повідомлення про нові платежі"
                    checked={true}
                />
                <br/>
                <br/>
                <TextField
                    name='group'
                    value={this.state.group}
                    floatingLabelText="Додаткові поля"
                    onChange={this.onChange}
                /><br/><br/>
                <RaisedButton disabled={this.state.name.length < 1} label="Створити гаманець" primary={true} onClick={this.save}/>
            </div>

        )
    }
}