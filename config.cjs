// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0g4aGIxcmxTd3NqZVlhYVBHUjJIUUhkd3JiOG5xQ1VlZEpFUlNtL3lFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidk5XNWZrc0p5Z0szN3JVb013NjVKUEhpdUp3dzVkMHJxSU8yUW5qWTIydz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4UGNrQTZJdnVwNitKekFJVFNXUXV2WUlyV2VsS2VYVDZXQjhWUXdNaTJVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ4ZjYzL2I0akNnS2NMNDBtT2hLd01pYWRpK3duQlZmNkFzYk5vdGpVRmxVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDVTVEZHcwWnk4WGY1MnhxSzJpN1BCMGNwUEtUY2F3cUtqMUlJMkZ6ME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpVYXVMYmdSK3Z4RDFFWk15TFc3ZUtJRGNPSm40Wk5Rb2FoN29TQTRUQ2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0UyWk9FRWx5dnBYaUlZRFJTVTFIRmFjbVFFZlZYbzBFMXkxUHNVS3VIaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUnpSQjIzeUp4aUpyZkU4SUpJVFRBSGRsNmN1RHhvNVdxOEt2U3hIMVNocz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw3MER2N1l2VElYK3pQaEVzSTROcTdDK1dQbnNTN1JSZk1KMjJ2alB1eTlrTVREbDVqY0RrVjBTRXJPRjFtVUV2TndxNjd2TjI4a2VMR05ZTHNidGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ5LCJhZHZTZWNyZXRLZXkiOiJHMkpOMEJURDZMN1hEbWJld2Y4anozeTI3SUo1MHRFVFFNYjFRK0tVeHlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NTc1Njg4NjQ5MkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJEOUYxNDVFNjNBRjY4RDcyNDBEOTM2RTdDNDg1MzAwMiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2MjkwMzUyfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTU3NTY4ODY0OTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiN0JENzRGOTkyNzVDN0E3NDY2MkNGRDZBNTIyQTBERTEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NjI5MDM1NX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiQ0NSbzdBWDlTV3lXVjN5TVN6UGZyQSIsInBob25lSWQiOiIwNzQ3M2UwZi1iOTA1LTRlNDEtODM2Mi0zODFmNDYwODYzZDciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZlEycXIvS0hJOHY5VzJFYWgvUGNmaWFNekRrPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii84U3ZxcWhzTUFGekRUN3hLNTA2Q3c2Rmt6UT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJNNEpKTTdaQiIsIm1lIjp7ImlkIjoiMjU1NzU2ODg2NDkyOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdlYLwnZWQ8J2Vg/CdlLwg8J2UufCdlYbwnZWQIOGhleGgteGgiuGhg+C7iOChmuCgouCgmOK4neC7iOCgoeGgit+v4aGB4KCj4KCY4aCK4aCK4KCi4KCY5rCU5LqgIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOR2ptT0FFRUoyTjJjQUdHQmdnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMaGxWQVExQ3ZVdklKa3BncTJDdHhCZXdGV3B2QlRCRzZROUtGd2syVnhJPSIsImFjY291bnRTaWduYXR1cmUiOiJIMk1CYXNyQVpodHBqdVZoTmdmblhUaFRXd2RidnFRdk9PbXZLbEE2Q01UbkliNmlibGRnZTBrdlk1TS9zbkFmWjVkZEtDbGdMQnBYd1ZaYjJFaEVEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV2NEK0paVW1nQnAwaGZ6UHVrZXZlT0MvejcyZlZnWWR2dFlLWVRzUXRrMUF0UXpxdUtWSjFkeHJLOUxFdXptdWR3UCtxMXlPamxsVzNuL3RYWnMrZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTY4ODY0OTI6MTZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUzRaVlFFTlFyMUx5Q1pLWUt0Z3JjUVhzQlZxYndVd1J1a1BTaGNKTmxjUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NjI5MDM0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPV1YifQ==",
  PREFIX: process.env.PREFIX || ',',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'true' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'true' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'true' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'true' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "private",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "KYLE BOY",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "255756886492",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : false, 
};

module.exports = config;
