const NavBarItems = async (req, res) => {
    res.json ({payload : {
        "Moment with Nature" : [],
        "Destination": [] ,
        "Our Accommodations": ["Suites" , "Challets" ],
        "Venues" : [ "Pool", "Gym & Spa" , "Day care & Entertaining Center" , "Bussiness center" ],
        "Dining": [ "Main restaurant" , "Qassab restaurant" , "Vino bar & restaurant" ],
        "Forest/Nature" : [],
        "Samandra":[],
        "Contact": []  
    }    });
}

export default NavBarItems;