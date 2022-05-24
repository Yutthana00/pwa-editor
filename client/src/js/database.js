import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  // Connect to database and choose version 1.
  const jateDB = await openDB('jate', 1);
  // Create new transaction specifying the database and data privilege.
  const tx = jateDB.transaction(['jade'], 'readwrite');
  // Open the desired object store.
  const store = tx.objectStore('jate');
  // Use the put method to edit content.
  const request = store.put({ id:1 , value: content });
  // Get confirmation of request.
  const result = await request;
  console.log('Successfully saved in database', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  // Connect to database and choose version 1.
  const jateDB = await openDB('jate', 1);
  // Create new transaction specifying the database and data privilege.
  const tx = jateDB.transaction(['jade'], 'readonly');
  // Open the desired object store.
  const store = tx.objectStore('jate');
  // Use the put method to edit content.
  const request = store.getAll();
  // Get confirmation of request.
  const result = await request;
  console.log(result);
};

initdb();
