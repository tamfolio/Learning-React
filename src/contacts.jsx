import React from 'react'
import ContactCard from './ContactCard';

function Contacts() {
    return (
        <div className='contacts'>
            <ContactCard
            name='Tamilore Olaniyi'
            phone='0817-124-6994'
            email='tamiloreolaniyi@gmail.com'/>
            <ContactCard
            name='Tamilore Olaniyi 2'
            phone='0817-124-6994'
            email='tamiloreolaniyi@gmail.com'
            />
            <ContactCard
            name='Tamilore Olaniyi 3'
            phone='0817-124-6994'
            email='tamiloreolaniyi@gmail.com'
            />
            <ContactCard
            name='Tamilore Olaniyi 4'
            phone='0817-124-6994'
            email='tamiloreolaniyi@gmail.com'
            />
        </div>
    )
}

export default Contacts;

