const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE tarefas (
            titulo text,
            descricao text
        )`)

        await db.close()

    }
}

initDb.init()