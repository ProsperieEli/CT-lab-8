//class of text; constructor && methods for SQL
const pool = require('../utils/pool');

module.exports = class Order {

  id;
  name;
  status;
  date;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.status = row.status;
    this.date = row.status;
  }

  static async insert(name, status, date) {
    const { rows } = await pool.query(`
    INSERT INTO orders (name, status, date)
    VALUES ($1, $2, $3) 
    RETURNING *`
      [name, status, date]
    );

    return new Order(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query(`
        SELECT * from orders`);

    return new Order(rows[0]);
  }
  
  static async get(id) {
    const { rows } = await pool.query(`
      SELECT * FROM orders
      WHERE id = $1
      RETURNING *`, [id]);

    return new Order(rows[0]);
  }
  
  static async update(id, name, status, date) {
    const { rows } = await pool.query(`
        UPDATE orders
        SET name = $1 
        SET status = $2
        SET date = $3
        WHERE id = $4
        RETURNING *`, [name, status, date, id]);
    return new Order(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(`
     DELETE from orders
     WHERE id = $1
     RETURNING *`, [id]);
    return new Order(rows[0]);
  }
};
