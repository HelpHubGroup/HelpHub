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

// Updates user cart
app.put('/api/update_cart', async (req, res) => {
  try {
    const { UFID, Cart} = req.body;

    // Check if at least one field to update is provided
    if (!Cart || !UFID) {
      return res.status(400).json({ error: 'At least one field to update is required.' });
    }

    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Customers/Students");

    const filter = { UFID: UFID };
    const updateFields = {};

    // Add fields to update if provided
    if (Cart) {
      // Set the cart field to the new array value
      updateFields.Cart = Cart;
    }

    const result = await collection.updateOne(filter, { $set: updateFields });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

//updates user
app.put('/api/update_user', async (req, res) => {
  try {
    const { UFID, firstName, lastName, password } = req.body;

    if (!UFID || (!firstName && !lastName && !password)) {
      return res.status(400).json({ error: 'UFID and at least one field to update are required.' });
    }

    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Customers/Students");

    const filter = { UFID: UFID };
    const updateFields = {};

    if (firstName) {
      updateFields.First_Name = firstName;
    }
    if (lastName) {
      updateFields.Last_Name = lastName;
    }
    if (password) {
      updateFields.Password = password;
    }

    const result = await collection.updateOne(filter, { $set: updateFields });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

//updates user
app.put('/api/update_employee', async (req, res) => {
  try {
    const { Employee_id, firstName, lastName, password } = req.body;

    if (!Employee_id || (!firstName && !lastName && !password)) {
      return res.status(400).json({ error: 'employeeid and at least one field to update are required.' });
    }

    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Employees");

    const filter = { Employee_id: Employee_id };
    const updateFields = {};

    if (firstName) {
      updateFields.First_Name = firstName;
    }
    if (lastName) {
      updateFields.Last_Name = lastName;
    }
    if (password) {
      updateFields.Password = password;
    }

    const result = await collection.updateOne(filter, { $set: updateFields });

    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.json({ message: 'User updated successfully.' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Deletes user based off UFid
app.delete('/api/delete_user', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Customers/Students");
    
    const query = req.query.query;

    
    // Use the query to find and delete the exact item
    const result = await collection.deleteOne({ UFID: query });
    
    // Check if an item was deleted
    if (result.deletedCount === 1) {
      res.json({ message: `Item "${query}" deleted successfully.` });
    } else {
      res.json({ message: `Item "${query}" not found for deletion.` });
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Deletes employee based off Employee_id
app.delete('/api/delete_empolyee', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Employees");
    
    const query = req.query.query;

    
    // Use the query to find and delete the exact item
    const result = await collection.deleteOne({ Employee_id: query });
    
    // Check if an item was deleted
    if (result.deletedCount === 1) {
      res.json({ message: `Item "${query}" deleted successfully.` });
    } else {
      res.json({ message: `Item "${query}" not found for deletion.` });
    }
  } catch (error) {
    console.error('Error deleting data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// Posts new user into the database
app.post('/api/postuser', async (req, res) => {
  try {
      await client.connect();
      const database = client.db("HelpHub");
      const collection = database.collection("Customers/Students");

      // Access UFID from request body
      const userUFid = req.body.UFID;

      // Check if a user with the same UFID already exists
      const existingUser = await collection.findOne({ UFID: userUFid });
      if (existingUser) {
          // If a user with the same UFID already exists, return an error response
          return res.status(400).send('User with the same UFID already exists');
      }

      // If no user with the same UFID exists, proceed to insert the new user
      const newData = req.body;
      const result = await collection.insertOne(newData);
      console.log('Data inserted:', result.ops);

      res.status(201).send('Data inserted successfully');
  } catch (err) {
      console.error('Error inserting data:', err);
      res.status(500).send('Error inserting data');
  }
});

// Posts new orders into the database
app.post('/api/postorder', async (req, res) => {
  try {
      await client.connect();
      const database = client.db("HelpHub");
      const collection = database.collection("Orders");

      // Access UFID from request body
      const userUFid = req.body.UFID;

      // Check if a user with the same UFID already exists
      const existingUser = await collection.findOne({ UFID: userUFid });
      if (existingUser) {
          // If a user with the same UFID already exists, return an error response
          return res.status(400).send('User with the same UFID already exists');
      }

      // If no user with the same UFID exists, proceed to insert the new user
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
    const filter = query ? { UFID: query } : {};
    
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
    console.log("Connected to MongoDB");
    
    const database = client.db("HelpHub");
    const collection = database.collection("Items");
    
    const query = req.query.query;
    console.log("Query:", query);
    
    // Construct a regex pattern to match similar words
    const regex = new RegExp(query, 'i'); // 'i' flag for case-insensitive search
    
    // Search for items with Item_Name matching the regex pattern
    const documents = await collection.find({ Item_Name: { $regex: regex } }).toArray();
    
    console.log("Documents found:", documents);
    
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
    console.log("MongoDB connection closed");
  }
});

// returns an array of items that match Food_Group
app.get('/api/get_allfood_Groupitems', async (req, res) => {
  try {
    await client.connect();
    const database = client.db("HelpHub");
    const collection = database.collection("Items");
    
    const query = req.query.query;
    
    // Find documents with the exact same Food_Group
    const documents = await collection.find({ Food_Group: query }).toArray();
    
    res.json(documents);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    await client.close();
  }
});

// returns a array of all orders in the database
app.get('/api/getallorders', async (req, res) => {
  try {
    // Connect to MongoDB client
    await client.connect();
    
    const database = client.db("HelpHub");
    const collection = database.collection("Orders");
    
    // No need for a filter when returning all items
    const documents = await collection.find({}).toArray();

    // Respond with a success status and data
    res.json({ success: true, data: documents });
  } catch (error) {
    console.error('Error fetching data:', error);
    // Respond with an error status and message
    res.status(500).json({ success: false, error: 'Internal server error' });
  } finally {
    // Close MongoDB client connection
    await client.close();
  }
});

// Listens for request from the frontend
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});