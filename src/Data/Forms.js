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
                title: 'Фамилия Имя Отчество',
                validation: {
                    isEmpty: true,
                    maxLength : 50,
                    regular: /[а-яА-ЯЁё]/,
                },
            },
            {
                id: 'phone',
                name: 'phone',
                type: 'phone',
                title: 'Телефон',
                validation: {
                    isEmpty: true,
                    regular: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                },
            },
            {
                id: 'email',
                name: 'email',
                type: 'email',
                title: 'Email',
                validation: {
                    isEmpty: true,
                    regular: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                },
            },
        ],
        checkboxes: [],
        radios: [],
        textarea: []
    },
    buttons: []
}