import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import Users from './Users'
import { UsersSchemaType, usersSchema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';

const UsersFormProvider = () => {

    const methods = useForm<UsersSchemaType>({
        mode: 'all',
        resolver: zodResolver(usersSchema),
    });

    return (
        <FormProvider {...methods}>
            <Users />
        </FormProvider>
    )
}

export default UsersFormProvider