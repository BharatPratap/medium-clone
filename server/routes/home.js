module.exports = (router) => {
    router.route("/").get((req, res) => {
        console.log("home");
        console.log(req);
    });
}