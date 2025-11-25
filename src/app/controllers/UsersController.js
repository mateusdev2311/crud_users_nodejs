let users = [
  { id: 1, name: 'Mateus Costa', tipo: 'admin' },
  { id: 2, name: 'Gabriela Corrêa', tipo: 'user' },
  { id: 3, name: 'Pedro Henrique', tipo: 'user' },
]
class UsersController {

  //Lista os usuarios
  index(req, res) {
    return res.json(users)
  }
  //Recupera um usuario
  show(req, res) {
    const id = parseInt(req.params.id)
    const user = users.find(user => user.id == id)
    const status = user ? 200 : 404
    return res.status(status).json(user)

  }
  //Cria um usuario
  create(req, res) {
    const { name, tipo } = req.body
    const id = users[users.length - 1].id + 1

    const user = { id, name, tipo }
    users.push(user)
    return res.status(201).json({
      user,
      message: 'Usuario criado com sucesso'
    })

  }
  //Atualiza um usuario
  update(req, res) {
    const id = parseInt(req.params.id)
    const { name, tipo } = req.body

    const user = users.findIndex(user => user.id == id)
    const status = user >= 0 ? 200 : 404

    if (user >= 0) {
      users[user] = { id, name, tipo }
      return res.status(status).json({
        user: users[user],
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
    const user = users.findIndex(user => user.id == id)
    const status = user >= 0 ? 200 : 404

    if (user >= 0) {
      users.splice(user, 1)
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

module.exports = new UsersController()