// Fields object that passed to dynamic form
// In real scenario instead of defining we should receive it from some rest endpoint
const fields = [
    {
        type: 'text',
        name: 'firstName',
        label: 'First name'
    },
    {
        type: 'text',
        name: 'lastName',
        label: 'Last name'
    },
    {
        type: 'select',
        name: 'role',
        label: 'Role',
        options: [
            {label: "client", value: "client"},
            {label: "admin", value: "admin"}
        ]
    },
    {
        type: 'checkbox',
        name: 'remember',
        label: 'Remember me'
    }
];

// Simulation of rest endpoint call with setTimeout
const fetchFields = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(fields)
        }, 1000)
    });
};

export default {
    fetchFields
};