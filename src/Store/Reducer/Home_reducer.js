import { act } from "react-dom/test-utils";



const Initial_State ={
    Home_Contents:[
        {
            id: 1,
            image:'https://apollo-singapore.akamaized.net/v1/files/aj0nbcmlllac-PK/image;s=200x400;q=60',
            price: 'Rs 500,000 - Flexcible',
            infor: 'Toyota Aqua',
            city: 'Shadman Town, Karachi',
            date: 'OCT 02'
        },
        {
            id: 2,
            image: 'https://apollo-singapore.akamaized.net/v1/files/qeekrk49ysyq3-PK/image;s=200x400;q=60',
            price: 'Rs 73,000',
            infor: 'Ravi piaggio125 self start',
            city: 'Lahore',
            date: 'OCT 23'
        },
        {
            id: 3,
            image: 'https://apollo-singapore.akamaized.net/v1/files/b3engz1hyfgt3-PK/image;s=200x400;q=60',
            price: 'Rs 360,000',
            infor: 'Honda city',
            city: 'Lahore',
            date: 'Nov 2'
        },
        {
            id: 4,
            image:'https://apollo-singapore.akamaized.net/v1/files/xc8h9t55d2q1-PK/image;s=200x400;q=60',
            price: 'Rs 34,000',
            infor: 'Bunker bed',
            city: 'Shadman Town, Lahore',
            date: 'OCT 22'
        },
        {
            id: 5,
            image:'https://apollo-singapore.akamaized.net/v1/files/971wwcu5ku9h3-PK/image;s=200x400;q=60',
            price: 'Rs 28,000',
            infor: 'Care cooking range',
            city: 'Gulstan, karachi',
            date: 'OCT 10'
        },
        {
            id: 6,
            image: 'https://apollo-singapore.akamaized.net/v1/files/afbpwmpn2k542-PK/image;s=200x400;q=60',
            price: 'Rs 40,000',
            infor: 'Honda cd',
            city: 'islamadab',
            date: 'OCT 20'
        },
        {
            id: 7,
            image: 'https://apollo-singapore.akamaized.net/v1/files/z0gfpzeciwsu2-PK/image;s=200x400;q=60',
            price: 'Rs 70,000',
            infor: 'CG 125',
            city: 'Karachi',
            date: 'OCT 30'
        },
        {
            id: 8,
            image:'https://apollo-singapore.akamaized.net/v1/files/cclo4p8dj7xv2-PK/image;s=200x400;q=60',
            price: 'Rs 500,000 - Flexcible',
            infor: 'Suzuki Margalla',
            city: 'Shadman Town, Karachi',
            date: 'OCT 6'
        },
    ]
}






export default (state = Initial_State, action) => {
    switch(action.type) {
        case 'Add_User':
            return{
                ...state,
                Home_Contents: [...state.Home_Contents,action.payload]
            }
        default:
            return state;
    }
}