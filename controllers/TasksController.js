const {
    Tasks
} = require('../models')

let Task = {
    create: async (req, res) => {

        let {
            descricao,
            email,
            responsavel
        } = req.body

        responsavel = responsavel.toUpperCase()
        email = email.toLowerCase()

        try {
            const criar = await Tasks.create({
                descricao,
                email,
                responsavel,
                status: 1,
                alteracoes: 0,
            }).then((result) => {  return res.status(200).json({msg:"Task created"})})
          
        } catch (err) {
            console.log(err)
           return res.status(400).json(err)
        }

    },

    updateStats: async (req, res) => {

        console.log(req.body)

        let {
            id
        } = req.params
        let {
            status,
            alteracoes
        } = req.body
        console.log("chegou")

        if (alteracoes >= 2 && status == false) {
          return  res.status(200).json({
                msg: "Limete de alterações atingido "
            })
        }  

        if (status === false) { //se colocar a task como pendente
            let {
                key
            } = req.body

            if (key === "TrabalheNaSaipos" || status === false) {
                alteracoes = alteracoes + 1
            } else {
              return res.status(400).json({
                    msg: "Senha de supervisor incorreta"
                })
            }
        }

        status = !status
        try {
            const alterar = await Tasks.update({
                status: status,
                alteracoes: alteracoes

            },{where: {id:id}})
           return res.status(200).json(alterar)
        } catch (err) {
            console.log(err)
           return res.status(400).json(err)
        }
    },

    getListaPendencia: async (req, res) => {

        try {
            const busca = await Tasks.findAll({
                where: {
                    status: true
                }
            })

          return  res.status(200).json(busca)
        } catch (err) {
          return  res.status(400).json(err)
        }
    },

    getListaFinalizadas: async (req, res) => {
        try {
            const busca = await Tasks.findAll({
                where: {
                    status: false
                }
            })

            return res.status(200).json(busca)
        } catch (err) {
          return  res.status(400).json(err)
        }


    }

}
module.exports = Task