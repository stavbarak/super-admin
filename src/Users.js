import React from 'react';
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import UrlField from './fields/UrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <EmailField source="email" />
            <TextField source="phone" />
            <TextField source="company.name" />
            <UrlField source="website" />
        </Datagrid>
    </List>
);