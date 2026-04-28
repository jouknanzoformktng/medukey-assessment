DROP TABLE IF EXISTS energy_assessments;

CREATE TABLE energy_assessments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    email TEXT NOT NULL,
    base_element TEXT NOT NULL,
    quiz_element TEXT NOT NULL,
    answers_json TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
