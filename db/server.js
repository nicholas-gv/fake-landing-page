const express = require("express");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

const app = express();
const port = 8000;

const db = new sqlite3.Database(path.resolve("db", "app-database.sqlite3"), (err) => {
	if (err) {
		console.error(err.message);
		return;
	}
	console.log("Connected to the app-database.");
});

// API endpoint to fetch all data from the database
app.get("/api/data", (req, res) => {
	const query = "SELECT * FROM events";

	db.all(query, [], (err, rows) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: "Internal server error" });
			return;
		}
		res.json(rows);
	});
});

// API endpoint to fetch data by ID from the database
app.get("/api/data/:id", (req, res) => {
	const { id } = req.params;
	const query = "SELECT * FROM events WHERE id = ?";

	db.get(query, [id], (err, row) => {
		if (err) {
			console.error(err.message);
			res.status(500).json({ error: "Internal server error" });
			return;
		}
		if (!row) {
			res.status(404).json({ error: "Data not found" });
			return;
		}
		res.json(row);
	});
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
