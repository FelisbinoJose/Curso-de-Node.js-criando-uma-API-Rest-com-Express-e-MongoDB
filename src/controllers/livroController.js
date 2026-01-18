import { autor } from "../models/Autor.js";
import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).send(listaLivros);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async cadastrarLivro(req, res) {

        const novoLivro = req.body;

        try {
            const autorEncontrado = await autor.findById(novoLivro.autor);
            const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc } }
            const livroCriado = await livro.create(livroCompleto)
            res.status(201).json({ message: "Criado com sucesso", livro: livroCriado });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao
                cadastrar livro`})
        }
    };


    static async listarLivrosPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).send(livroEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).send({ message: "Livro atualizado" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).send({ message: "Livro excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

};

export default LivroController;