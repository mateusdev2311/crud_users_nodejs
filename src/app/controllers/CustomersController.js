import Customer from "../models/Customer"

let customers = [
  { id: 1, name: 'Mateus Costa', tipo: 'admin' },
  { id: 2, name: 'Gabriela Corrêa', tipo: 'user' },
  { id: 3, name: 'Pedro Henrique', tipo: 'user' },
]
class CustomersController {

  //Lista os usuarios
  async index(req, res) {
    try {
      const data = await Customer.findAll()
      const status = data ? 200 : 404

      return res.status(status).json(data)
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }
  }


  //Recupera um usuario
  show(req, res) {
    try {
      const id = parseInt(req.params.id)
      const user = Customer.findOne({ where: { id } })
      return res.json(user)
    } catch (error) {
      return res.status(500).json({
        message: error.message
      })
    }

  }
  //Cria um usuario
  create(req, res) {
    const { name, tipo } = req.body
    const id = customers[customers.length - 1].id + 1

    const user = { id, name, tipo }
    customers.push(user)
    return res.status(201).json({
      user,
      message: 'Usuario criado com sucesso'
    })

  }
  //Atualiza um usuario
  update(req, res) {
    const id = parseInt(req.params.id)
    const { name, tipo } = req.body

    const user = customers.findIndex(user => user.id == id)
    const status = user >= 0 ? 200 : 404

    if (user >= 0) {
      customers[user] = { id, name, tipo }
      return res.status(status).json({
        user: custumers[user],
        message: 'Usuario atualizado com sucesso'
      })
    } else {
      return res.status(status).json({
        message: 'Usuario nao encontrado'
      })
    }


  }
  //Deleta um usuario
  destroy(req, res) {
    const id = parseInt(req.params.id)
    const user = customers.findIndex(user => user.id == id)
    const status = user >= 0 ? 200 : 404

    if (user >= 0) {
      customers.splice(user, 1)
      return res.status(status).json({
        message: 'Usuario deletado com sucesso'
      })
    } else {
      return res.status(status).json({
        message: 'Usuario nao encontrado'
      })
    }

  }
}

export default new CustomersController()