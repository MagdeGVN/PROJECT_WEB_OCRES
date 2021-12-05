exports.findOne = (req, res) => {
    Film.findById(req.params.id)
    .then(film =>{
        if(!film){
            return res.status(404).send({
                message: 'Film not found with id ' + req.params.id
            });
        }
        res.send(film);
    })
    .catch(err => {
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: 'Film not foud with id ' + req.params.id
            });
        }
        return res.status(500).send({
            message: 'Error retrieving film with id ' + req.params.id
        });
    });
};