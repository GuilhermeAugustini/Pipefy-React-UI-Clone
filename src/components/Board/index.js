import React from 'react';

import  { loadLists } from '../../services/api';

import List from '../List';

import { Container } from './style';

const lists = loadLists();

export default function Board() {
    return (
        <Container>
            {lists.map( list => <List key={list.title} data={list} />)}
        </Container>
        
    );
}
