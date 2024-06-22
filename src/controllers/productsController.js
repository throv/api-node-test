let products = [];

const newProduct = (req, res) => {
    const { name, description, price, available } = req.body;
    if (!name || !description || price == null || available == null) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }
    const newProduct = {
        name,
        description,
        price: parseFloat(price),
        available: available === true
    };
    products.push(newProduct);
    res.status(201).json(newProduct);

}

const listProducts = (req, res) => {
    const sortedProducts = products.sort((a, b) => a.price - b.price);
    res.json(sortedProducts);

}

export default { newProduct, listProducts };