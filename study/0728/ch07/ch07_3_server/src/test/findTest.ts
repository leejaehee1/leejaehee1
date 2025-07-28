import * as M from "../mongodb";

const connetCB = async (db: M.MongoDB) => {
  try {
    const user = db.collection("user");
    const one = await user.findOne({});
    console.log("one", one);

    const many = user.find({}).toArray();
    console.log("many", many);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
  }
};

export const findTest = () => {
  M.connectAndUseDB(connetCB, "mydb");
};

findTest();
