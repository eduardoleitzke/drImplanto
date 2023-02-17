import { connect, set } from "mongoose";

set("strictQuery", true);

connect("mongodb://localhost:27017/SmartDentario", (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("DATABASE OK");
    }
});
