const cds = require("@sap/cds");

module.exports = async (srv) => {
  const { BusinessPartners } = srv.entities;
  const externalService = await cds.connect.to("API_BUSINESS_PARTNER");
  
  srv.on("READ", BusinessPartners, async (req) => {

    const db = externalService.tx(req);
    db.run(req.query);
  });
};
