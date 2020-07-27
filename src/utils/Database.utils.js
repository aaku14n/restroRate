import * as SQLite from "expo-sqlite";
import { SEARCHED_TABLED_NAME } from "../Constant";
const db = SQLite.openDatabase("db.db");

export async function insertItem(data) {
  const items = await fetchSearchedItems();
  let checkAlreadyExist = items.find(
    i => i.value && data && JSON.parse(i.value).id == data.id
  );
  console.log(data, checkAlreadyExist, data.id);
  if (!checkAlreadyExist) {
    const stringifiedData = JSON.stringify(data);
    db.transaction(tx => {
      tx.executeSql(`insert into ${SEARCHED_TABLED_NAME} (value) values (?)`, [
        stringifiedData
      ]);

      tx.executeSql(
        `select * from ${SEARCHED_TABLED_NAME}`,
        [],
        (_, { rows }) => {
          if (rows.length > 4) {
            tx.executeSql(
              `delete from ${SEARCHED_TABLED_NAME} where id=${rows._array[0].id}`
            );
          }
        }
      );
    });
  }
}
export async function fetchSearchedItems() {
  return new Promise((resolve, reject) =>
    db.transaction(tx => {
      tx.executeSql(
        `select * from ${SEARCHED_TABLED_NAME}`,
        [],
        (_, { rows }) => resolve(rows._array),
        reject
      );
    })
  );
}
