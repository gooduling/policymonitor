import React from 'react';
import {Link} from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';
import {PocketsList} from "./PocketsList";

export const Home = ({demoId, pockets}) => (
    <div className='home page'>
        <p><b className='bigFont'>Публічний гаманець</b> - це інструмент краудфандингу, що дозволяє зробити швидкий збір
            грошей на картку прозорим і підзвітним.
            <br/>
            Якщо ви збираєте гроші на благодійність, або суспільні цілі, Публічний гаманець зможе стати вашою істотною
            конкурентною перевагою, бо прозорість викликає в людях більшу довіру і збільшує кількість пожертувачів.
            Людям буде набагато легше передати вам свої гроші, якщо вони зможуть на власні очі побачити, що жодна
            зібрана копійка з вашого публічного бюджету не зможе загубитися і, ймовірно, буде Вами відзвітована.
        </p>
        <p>Цей демонстраційний інтерфейс дає приблизне уявлення як може виглядати користування Прозорим Гаманцем.</p>
        <div className='buttons'>
            <Link to='/new'><RaisedButton label="Створити Гаманець" primary={true}/></Link>&nbsp;&nbsp;
            {demoId && <Link to={`/pocket/${demoId}`}><RaisedButton label="Переглянути Гаманець" primary={true}/></Link>}
        </div>
        <br/><br/><br/>
        <PocketsList pockets={pockets}/>
    </div>
)