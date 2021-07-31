export const simpleForm = {
    properties: {
        title: 'Simple Form',
        action: 'submit',
        declineBrowserValidation: true
    },
    fields: {
        inputs: [
            {
                id: 'initials',
                name: 'initials',
                type: 'text',
                title: 'Фамилия имя Отчество',
                validation: {
                    isEmpty: true,
                    maxLength : 3,
                },
            },
            {
                id: 'email',
                name: 'email',
                type: 'email',
                title: 'Email',
                validation: {
                    isEmpty: true,
                },
            },
        ],
        checkboxes: [],
        radios: [],
        textarea: []
    },
    buttons: []
}