\echo 'You are about to delete the lifetracker database?'
\prompt 'If this is what you want press Enter, if not control-C to cancel > ' answer
DROP DATABASE lifetracker;
CREATE DATABASE lifetracker;
\connect lifetracker;

\i lifetracker-schema.sql