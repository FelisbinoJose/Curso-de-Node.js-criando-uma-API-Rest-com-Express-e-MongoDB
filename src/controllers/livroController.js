import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        const listaLivros = await livro.find({});
        res.status(200).send(listaLivros);
    }

};

export default LivroController;