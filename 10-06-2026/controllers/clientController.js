const dbClient = [];


// Create
export const addClient = (req, res) => {
    const data = req.body;
    dbClient.push(data);
    res.status(201).json({ "msg": `${data?.nome} cadastrado com sucesso` });
}

// Read All
export const getClients = (req, res) => {
    if (dbClient.length)
        res.status(200).json(dbClient);
    else
        res.status(200).json({ 'msg': 'Sem clientes' })
}

// Read One
export const getClient = (req, res) => {
    const id = req.params.id
    if (isNaN(id))
        res.status(400).send('id inválido');
    const result = dbClient.find(client => client.id === id);
    res.status(200).json(result);
}

// Update
export const updateClient = (req, res) => {
    const id = req.params.id
    if (isNaN(id)) res.status(400).send('id inválido')
    const index = dbClient.findIndex(client => client.id === id);
    dbClient[index] = req.body;
    res.status(204).send('');
}

// Delete
export const deleteClient = (req, res) => {
    const id = req.params.id
    if(isNaN(id)) res.status(400).sen('id inválido')
    const index = dbClient.findIndex(client => client.id === id)
    dbClient.splice(index, 1) // remove 1 registro a partir do index informado
    res.status(204).send('')
}

