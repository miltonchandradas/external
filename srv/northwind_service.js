const cds = require("@sap/cds");

module.exports = async (srv) => {
  const { Products } = srv.entities;
  const externalService = await cds.connect.to("Northwind");

  srv.on("READ", Products, (req) => {
    const db = externalService.tx(req);
    return db.run(req.query);
  });
};
