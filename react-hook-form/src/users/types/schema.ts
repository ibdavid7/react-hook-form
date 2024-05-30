import { z } from 'zod';
import { patterns } from '../../constants';

export const usersSchema = z.object({
    name: z.string().min(1, {
        message: 'Required',
    }),
    email: z.string().email().min(1, {
        message: 'Email is required',
    }).refine((email) => {
        // validate text to be email
        // if it is true
        // else if it is not a valid email
        return patterns.email.test(email);
    }, {
        message: 'Invalid email',
    }),
    age: z.number().positive(),
    custom: z.custom(),
    states: z.array(z.string()).min(1, {
        message: 'Required',
    }).max(2, {
        message: 'Max 2 states',S
    }),
});

export type UsersSchemaType = z.infer<typeof usersSchema>