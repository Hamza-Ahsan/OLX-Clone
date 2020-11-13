const Initial_State ={
    Mobile_Contents:[
        {
            id: 1,
            image:'https://apollo-singapore.akamaized.net/v1/files/hyksq0yzqp5h3-PK/image;s=200x400;q=60',
            price: 'Rs 14,000',
            infor: 'Sumsung S6',
            city: 'Mirpur, Azad Kashmir',
            date: 'OCT 02'
        },
        {
            id: 2,
            image:'https://apollo-singapore.akamaized.net/v1/files/vp59dx5164bj2-PK/image;s=200x400;q=60',
            price: 'Rs 8,000',
            infor: 'Sumsung Mobile',
            city: 'Muzaffarabad, Azad Kashmir',
            date: 'OCT 28'
        },
        {
            id: 3,
            image:'https://apollo-singapore.akamaized.net/v1/files/8zewh6hhxk2o3-PK/image;s=200x400;q=60',
            price: 'Rs 76,000',
            infor: 'iphone Xs',
            city: 'Lahore',
            date: 'OCT 25'
        },
        {
            id: 4,
            image:'https://apollo-singapore.akamaized.net/v1/files/zi7bg6w9z0qq2-PK/image;s=200x400;q=60',
            price: 'Rs 6,500',
            infor: 'Qmobil',
            city: 'Karachi',
            date: 'OCT 15'
        },
        {
            id: 5,
            image:'https://apollo-singapore.akamaized.net/v1/files/mhk2p6k7iq7u1-PK/image;s=200x400;q=60',
            price: 'Rs 3,400',
            infor: 'Nokia C3',
            city: 'karachi',
            date: 'OCT 30'
        },
        {
            id: 6,
            image:'https://apollo-singapore.akamaized.net/v1/files/i10tb4hesfbc2-PK/image;s=200x400;q=60',
            price: 'Rs 35,000',
            infor: 'Nokia 7.2',
            city: 'Islamabad',
            date: 'Today'
        },
          
    ]
}


export default (state = Initial_State, action) => {
    switch(action.type) {
        default:
            return state;
    }
}