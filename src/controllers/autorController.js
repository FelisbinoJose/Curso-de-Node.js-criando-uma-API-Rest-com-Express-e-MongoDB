import { autor } from "../models/Autor.js"

class autorController {

    static async listarAutor(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).send(listaAutores);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - falha ao
                cadastrar autor`})
        }
    };


    static async listarAutoresPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).send(autorEncontrado);
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).send({ message: "Autor atualizado" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).send({ message: "Autor excluido com sucesso" });
        } catch (erro) {
            res.status(500).json({
                message: `${erro.message} - 
                falha na requisição`});
        }

    };

};

export default autorController;