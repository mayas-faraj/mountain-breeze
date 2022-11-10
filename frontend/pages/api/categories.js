const categories = async (req, res) => {
    res.json ({payload : [ "single" , "double" , "suite" , "challete"  ]   });
}

export default categories;