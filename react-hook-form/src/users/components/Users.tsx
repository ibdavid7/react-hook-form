import { Stack, TextField, Autocomplete } from '@mui/material';
import React, { useContext } from 'react'
import { useForm, useFormContext } from 'react-hook-form'
import { UsersSchemaType, usersSchema } from '../types/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import RHFAutocomplete from '../../components/RHFAutocomplete';
const Users = () => {
    // const { register,
    //     formState: { errors },
    //     handleSubmit,
    //     reset
    // } = useForm<UsersSchemaType>({
    //     mode: 'all',
    //     resolver: zodResolver(usersSchema),
    // });

    const { register,
        formState: { errors },
        handleSubmit,
        reset
    } = useFormContext();

    const handleOnSubmit = (data: any) => {
        console.log(data);
        reset();
    }

    const states = [
        { id: 1, label: 'Texas' }, { id: 2, label: 'California' }, { id: 3, label: 'Florida' }, { id: 4, label: 'New York' }, { id: 5, label: 'Washington' },
    ];

    type State = {
        id: number;
        label: string;
    }


    return (
        <>
            <Stack sx={{ gap: 2 }}>

                <TextField {...register('name')} label={'name'} error={!!errors.name} helperText={errors.name?.message} />
                <TextField {...register('email')} label={'email'} error={!!errors.email} helperText={errors.email?.message} />
                <Autocomplete
                    // value={value}
                    // onChange={(event, newValue) => {
                    //     setValue(newValue);
                    // }}
                    options={states}
                    renderInput={(params: State[]) => <TextField {...params} label="States" />}
                />
                <RHFAutocomplete<UsersSchemaType>
                    name={'states'}
                />

            </Stack>
        </>
        // <form onSubmit={handleSubmit(handleOnSubmit)}>
        //     <input {...register('email', {
        //         required: { value: true, message: 'Email is required' },
        //         maxLength: { value: 10, message: 'Max characters is 10' },
        //     })} placeholder={'Email'} />
        //     <p>{errors.email?.message}</p>
        // </form>
    )
}

export default Users