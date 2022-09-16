import {Alert} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';

export const getDBConnection = openDatabase(
  {name: 'rnApp', location: 'default'},
  success => console.log('DB Connection Success ', success),
  error => {
    console.log('ERROR DB CONNECTION =>', error);
  },
);

export const createTable = () => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS Users(
          ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT, Email TEXT UNIQUE
      );`;

  getDBConnection.transaction(tx => {
    tx.executeSql(query);
  });
};

export const getUser = async email => {
  let result = {};
  try {
    getDBConnection.transaction(tx => {
      tx.executeSql(
        `SELECT Name, Email FROM Users WHERE Email=${email}`,
        [],
        (tr, results) => {
          var len = results.rows.length;
          for (let i = 0; i < len; i++) {
            let row = results.rows.item(i);
            result.name = row.name;
            result.email = row.email;
          }
        },
        (tx, error) => console.log('Error Getting User =>', error.message),
      );
    });
    console.log({result});
    return result;
  } catch (error) {
    console.error('Caught Error Getting User =>', error);
    throw Error('Failed to get User !!!');
  }
};

export const saveUser = ({name, email}) => {
  const insertQuery = `INSERT OR REPLACE INTO User(Name, Email) values (?, ?)`;

  getDBConnection.transaction(tx => {
    tx.executeSql(insertQuery, [name, email])
      .then(res => console.log({res}))
      .catch(error => console.log('userCreateError => ', error));
    Alert.alert('User Created Successfully');
  });
};
