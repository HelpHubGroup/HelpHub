const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');


const app = express();
const port = 5001;
app.use(bodyParser.json());


app.use(cors({
  origin: 'http://localhost:3000'
}));

const uri = "mongodb+srv://kevinSu27:cIBZkmEQUapb19NP@cluster0.7usfwq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Posts new user into the database
app.post('/api/postuser', async (req, res) => {
  try {
      await client.connect();
      const database = client.db("HelpHub");
      const collection = database.collection("Customers/Students");

      const newData = req.body;

      const result = await collection.insertOne(newData);
      console.log('Data inserted:', result.ops);

      res.status(201).send('Data inserted successfully');
  } catch (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
  }
});
// Gets Employee based off Employee_id
app.get('/api/getEmployee', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Employees");
    
    // Extract query parameter from request
    const query = req.query.query;
    
    // Use the extracted query parameter to filter documents
    const filter = query ? { Employee_id: query } : {};
    
    const documents = await collection.find(filter).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});
// Grabs existing user based off UFid
app.get('/api/getuser', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Customers/Students");
    
    // Extract query parameter from request
    const query = req.query.query;
    
    // Use the extracted query parameter to filter documents
    const filter = query ? { UFid: query } : {};
    
    const documents = await collection.find(filter).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// returns a single item from the database
app.get('/api/getitems', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Items");
    
    // Extract query parameter from request
    const query = req.query.query;
    
    // Use the extracted query parameter to filter documents
    const filter = query ? { Item_Name: query } : {};
    
    const documents = await collection.find(filter).toArray();
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// returns an array of similarly worded items
app.get('/api/get_allrelateditems', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Items");
    
    const query = req.query.query;
    
    // Use text search for similar worded items
    const documents = await collection.find({ $text: { $search: query } }).toArray();
    
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Listens for request from the frontend
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});