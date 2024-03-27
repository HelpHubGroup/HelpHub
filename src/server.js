const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 5001;
app.use(cors({
  origin: 'http://localhost:3000'
}));

const uri = "mongodb+srv://kevinSu27:cIBZkmEQUapb19NP@cluster0.7usfwq7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});