const cds = require("@sap/cds");

module.exports = async (srv) => {
  const { Products } = srv.entities;
  const externalService = await cds.connect.to("Northwind");

  srv.on("READ", Products, (req) => {
    const db = externalService.tx(req);
    return db.run(req.query);
  });

  srv.after("READ", Products, (req) => {
    srv.emit("feedback", {
      rating: 5,
      review: "Amazing product... ",
    });
    console.log("Event raised: feedback");
  });

  srv.on("feedback", payload => {
      const { rating, review } = payload.data;
      console.log("Rating: ", rating);
      console.log("Review: ", review);

  })
};
