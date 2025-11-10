// valid users; 

export const USERS = [
    {
        scenario: 'Brazilian male user', 
        name: 'João Silva',
        email: 'joao.silva@yopmail.com',
        password:'SenhaSegura123!',
        countryLabel: 'Brazil',
        countryValue: 'brazil',
        gender: 'Male',
        genderValue: 'male',
        hobbies: ['Travel']
    },
    {
        scenario: 'American female user',
        name: 'Emily Johnson',
        email: 'emily.johnson@yopmail.com',
        password: 'SecurePassword456!',
        countryLabel: 'United States of America',
        countryValue: 'usa',
        gender: 'Female',
        genderValue: 'female',
        hobbies: ['Movies', 'Sports']
    },
    {
        scenario: 'Canadian other gender user',
        name: 'Alex Taylor',
        email: 'alex.taylor@yopmail.com',
        password: 'Password789!',
        countryLabel: 'Canada',
        countryValue: 'canada',
        gender: 'Other',
        genderValue: 'other',
        hobbies: ['Movies', 'Sports', 'Travel']
    },
    {
        scenario: 'No hobbies Mexican male user',
        name: 'Liam Brown',
        email: 'liam.terente@yopmail.com',
        password: 'Password123!',
        countryLabel: 'Mexico',
        countryValue: 'mexico',
        gender: 'Male',
        genderValue: 'male',
        hobbies: []
    },
    {
        scenario: 'All hobbies portuguese female user',
        name: 'Lia Pereira',
        email: 'lia.pereira@yopmail.com',
        password: 'Password123!',
        countryLabel: 'Portugal',
        countryValue: 'portugal',
        gender: 'Female',
        genderValue: 'female',
        hobbies: ['Movies', 'Sports', 'Travel', 'Read books', 'Video Games', 'Board Games']
    }
];

export const FORM_MESSAGES = {
  successTitle: 'Success!',
  successBody: 'The form has been submitted',
};