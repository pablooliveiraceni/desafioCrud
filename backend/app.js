const app = require('./src/config/server');
const connection = require('./src/config/connection');


app.get('/personagens', (req, res) => {
    const sql = "SELECT * FROM personagens";

    connection.query(sql, (error, result) => {
        if(result){
            res.status(201).json(result)
        } else {
            res.json({
                "message": "Erro na conexão com o banco de dados"
            })
        }
    })
})

app.post('/personagens', async (req, res) => {
    const { nome, desc_curta, desc_completa, image } = req.body;

     const sql = `INSERT INTO personagens(nome, desc_curta, desc_completa, image ) values ('${nome}', '${desc_curta}', '${desc_completa}', '${image}')`
  
     connection.query(sql, (error, result) => {
         if (result) {
             res.status(201).json(result)
         } else {
            res.json({
                "message": "Erro na conexão com o banco de dados!"
            })
         }
     })  
  });

  app.put('/personagens', async (req, res) => {
      const { id, nome, desc_curta, desc_completa, image } = req.body;

      const sql = `UPDATE personagens
      SET nome = '${nome}', desc_curta = '${desc_curta}', desc_completa = '${desc_completa}', image = '${image}'
      WHERE id = '${id}'`

      connection.query(sql, (error, result) => {
          if (result) {
              res.json(result)
          } else {
              res.json({"mesage": "error ao fazer update no bd"})
          }
      })
  })

  app.delete('/personagens', async (req, res) => {
    const { id } = req.body;

    const sql = `DELETE FROM personagens
  WHERE id = '${id}'`

    connection.query(sql, (error, result) => {
        if (result) {
            res.json(result)
        } else {
            res.json({"mesage": "error ao fazer delete no bd"})
        }
    })
})

